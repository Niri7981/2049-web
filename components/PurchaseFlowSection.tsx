"use client";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "工作原理", title: "先授权，再完成购买。",
    intro: "Agent 需要外部付费 API、数据或工具时，先由你决定允许购买的资源和额度，再由 Yosh 检查并执行受支持的购买。",
    steps: [
      ["连接 Agent", "通过 MCP 接入 Agent。连接成功，并不意味着它已经获得支出权限。"],
      ["创建 SpendGrant", "为具体资源设置授权金额、单笔上限和有效期。登记 API 不会自动授权。"],
      ["提交购买请求", "Agent 提交资源、允许的输入及请求标识；付款金额来自报价。"],
      ["检查权限与预算", "本地 Authority 核对授权、有效期、预算和暂停状态，再预占额度。"],
      ["付款", "签名前及首次提交前再次检查；由独立签名边界执行受支持的 x402 付款。"],
      ["交付并记录", "取得 API 返回内容，分别记录付款和交付结果。付款成功不等于交付成功。"],
    ],
    boundary: "授权过期、预算不足或新付款暂停时，请求会被拒绝。交易结果未知时，需要先核对结果，不能把未知当成失败直接重付。",
    cta: "试用交互原型 →", note: "模拟体验 · 不连接钱包，不签名，不发送交易。",
  },
  en: {
    eyebrow: "How it works", title: "From a task’s need to an authorized purchase.",
    intro: "When an agent needs a paid API, data or tool, you define the resources and spending limits. Yosh checks that authority before executing a supported purchase.",
    steps: [
      ["Connect an agent", "Connect through MCP. A connection alone does not grant permission to spend."],
      ["Create a SpendGrant", "Authorize a specific resource with a total, per-purchase limit and expiry. Registering an API does not authorize spending."],
      ["Request a purchase", "The agent supplies a resource, allowed inputs and a request ID. The payment amount comes from a quote."],
      ["Check policy and budget", "The local Authority checks the grant, expiry, budget and pause state before reserving funds."],
      ["Pay", "Checks run again before signing and first submission. A separate signing boundary handles supported x402 payments."],
      ["Deliver and record", "Retrieve the API response and record payment and delivery separately. A successful payment does not guarantee delivery."],
    ],
    boundary: "Expired grants, insufficient budgets and paused new payments block the request. An unknown transaction outcome must be checked before retrying payment.",
    cta: "Try the interactive prototype →", note: "Simulation · No wallet connection, signing or transactions.",
  },
};

export default function PurchaseFlowSection() {
  const { locale } = useLanguage();
  const c = copy[locale];
  return (
    <section className="essay-section purchase-flow-section" id="how-it-works" aria-labelledby="purchase-flow-title">
      <div className="editorial-inset">
        <p className="purchase-flow-eyebrow">{c.eyebrow}</p>
        <h2 className="editorial-title" id="purchase-flow-title">{c.title}</h2>
        <p className="purchase-flow-intro">{c.intro}</p>
        <ol className="purchase-flow-steps">
          {c.steps.map(([title, body], index) => (
            <li key={title}><span className="purchase-flow-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>
          ))}
        </ol>
        <p className="purchase-flow-boundary">{c.boundary}</p>
        <div className="purchase-flow-actions"><a href="/prototype/index.html">{c.cta}</a><span>{c.note}</span></div>
      </div>
    </section>
  );
}
