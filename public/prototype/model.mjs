// Presentation-only state. No App backend, signer, SDK, RPC or live payment.
export const AMOUNT=1000n;
export function atomic(value){if(!/^(0|[1-9]\d*)(\.\d{1,6})?$/.test(String(value)))throw new Error('INVALID_AMOUNT');const [whole,fraction='']=String(value).split('.');return BigInt(whole)*1000000n+BigInt(fraction.padEnd(6,'0'));}
export function display(value){const amount=BigInt(value);const whole=amount/1000000n;const fraction=(amount%1000000n).toString().padStart(6,'0').replace(/0+$/,'');return fraction?`${whole}.${fraction}`:`${whole}.00`;}
export function fresh(scenario='success'){return {scenario,step:0,tab:'connection',member:'Codex',connected:false,connectedMember:null,dailyLimit:100000n,paid:0n,reserved:0n,grant:null,request:null,decision:null,payment:'NOT_STARTED',delivery:'NOT_PAID',paused:false,complete:false,notice:null};}
export function connect(s){
 if(s.connectedMember&&s.connectedMember!==s.member){s.request=null;s.decision=null;s.payment='NOT_STARTED';s.delivery='NOT_PAID';s.complete=false;s.reserved=0n;}
 s.connected=true;s.connectedMember=s.member;s.step=1;s.tab='authority';
}
export function createGrant(s,total='0.01',single='0.001',minutes='60'){
 const totalAtomic=atomic(total),singleAtomic=atomic(single),duration=Number(minutes);
 if(totalAtomic<=0n||singleAtomic<=0n||singleAtomic>totalAtomic||![5,60,1440].includes(duration))throw new Error('INVALID_GRANT');
 s.grant={member:s.member,total:totalAtomic,single:singleAtomic,expiresMinutes:duration,expired:s.scenario==='expired',spent:0n};
 if(s.scenario==='missing')s.grant=null;
 if(s.scenario==='budget')s.dailyLimit=0n;
 if(s.scenario==='paused')s.paused=true;
 if(s.scenario==='single'&&s.grant)s.grant.single=500n;
 s.step=2;s.tab='authority';
}
export function request(s){if(s.step!==2)return;s.request={member:s.member,id:'SIM-preview-0001',resource:'agent402-crypto-price',amount:AMOUNT};s.step=3;s.tab='authority';}
export function check(s){
 if(!s.request)return 'REQUEST_NOT_CREATED';
 if(!s.connected||s.connectedMember!==s.member||s.request.member!==s.member)return 'AGENT_UNAUTHORIZED';
 if(s.paused)return 'PAYMENTS_PAUSED';
 if(s.paid+s.reserved+s.request.amount>s.dailyLimit)return 'DAILY_BUDGET_EXCEEDED';
 if(!s.grant||s.grant.member!==s.member)return 'SPEND_GRANT_REQUIRED';
 if(s.grant.expired)return 'SPEND_GRANT_EXPIRED';
 if(s.request.amount>s.grant.single)return 'SPEND_GRANT_SINGLE_LIMIT_EXCEEDED';
 if(s.grant.spent+s.reserved+s.request.amount>s.grant.total)return 'SPEND_GRANT_TOTAL_LIMIT_EXCEEDED';
 return null;
}
export function evaluate(s){if(s.step!==3||s.decision)return;const reason=check(s);if(reason){s.decision={result:'DENIED',reason};return;}s.decision={result:'APPROVED',reason:'AUTHORITY_BUDGET_AND_GRANT_PASSED'};s.reserved+=s.request.amount;s.step=4;}
export function pay(s){
 if(s.step!==4||s.decision?.result!=='APPROVED')return;
 // Recheck the same request while its reservation is already accounted for.
 const saved=s.reserved;s.reserved=0n;const reason=check(s);s.reserved=saved;
 if(reason){s.reserved=0n;s.decision={result:'DENIED',reason};s.payment='NOT_STARTED';s.step=3;return;}
 s.paid+=s.request.amount;s.reserved-=s.request.amount;s.grant.spent+=s.request.amount;s.payment='PAID';s.delivery='PENDING';s.step=5;
}
export function deliver(s){if(s.step!==5||s.payment!=='PAID'||s.complete)return;s.delivery='COMPLETE';s.complete=true;}
export function disconnect(s){if(s.connectedMember===s.member)s.connected=false;}
export function remaining(s){const value=s.dailyLimit-s.paid-s.reserved;return value<0n?0n:value;}
