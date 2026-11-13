export const AGENT_EMAIL = 'info@rishvi.co.uk';
export const AGENT_LINK = `mailto:${AGENT_EMAIL}?subject=${encodeURIComponent('Custom Linnworks AI agent request')}`;

export const AGENT_IMAGES = {
  hero: 'assest/AI-agents-1.webp',
  teamA: 'assest/people-business-meeting-high-angle_23-2148911819.avif',
  teamB: 'assest/images-3.webp',
  custom: 'assest/240_F_373514790_fvPkgwLkD95dJlj4Z1aYvbhUtybDRDXw.jpg',
  contact: 'assest/background-5.png',
};

export const AGENT_INTRO = {
  eyebrow: 'Linnworks AI agent',
  title: 'Linnworks AI Agent: Coming Soon. Custom Agents Available Now.',
  text: 'An AI agent that works through your Linnworks operation on its own schedule. It checks stock, spots blocked orders, prepares purchase orders and asks a person to approve before anything changes.',
  cta: 'Build a Custom Agent Now',
};

export const AGENT_FACTS = {
  title: 'Key Facts',
  items: [
    { value: 1, label: 'Approval Before any Change' },
    { value: 6, label: 'Operational Areas Covered' },
    { value: 33, label: 'Linnworks MCP tools' },
  ],
};

export const AGENT_VS = {
  eyebrow: 'Assistant vs agent',
  title: "AI Assistant Or AI Agent: What's The Difference?",
  paragraphs: [
    'An AI assistant answers when you ask. An AI agent works towards a goal on its own, then reports back.',
    'Hyperstock AI is an assistant: you ask “what could run out this fortnight?” and it answers. A Linnworks AI agent is given a job, such as “keep A-class products in stock”, and runs it every morning. It gathers the data, works out what needs doing, and either reports or prepares the action for approval.',
    'Both run on the same Linnworks MCP server, so an agent uses exactly the tools and guardrails you already trust.',
  ],
  head: ['', 'Assistant', 'Agent'],
  rows: [
    ['Starts when', 'You ask', 'On a schedule or trigger'],
    ['Works on', 'One question', 'A goal or playbook'],
    ['Output', 'An answer', 'A report or a prepared action'],
    ['Changes data', 'Never', 'Only after approval'],
  ],
};

export const AGENT_PLAYBOOKS = {
  eyebrow: 'Planned agent playbooks',
  title: 'What the Linnworks AI agent will do',
  text: 'These are the first agent playbooks we are building. Each one can also be built for you today as a custom agent.',
  items: [
    { icon: 'pi-refresh', title: 'Replenishment', text: 'Finds products whose stock cover is shorter than supplier lead time, then drafts purchase orders that respect MOQ and pack size. Prepares POs for approval.' },
    { icon: 'pi-bell', title: 'Stockout watch', text: 'Checks best-sellers daily against consumption and incoming stock, and alerts you before a gap opens.' },
    { icon: 'pi-filter', title: 'Blocked order triage', text: 'Groups orders blocked by stock and shows which will clear with incoming deliveries and which need action. Reports to customer service.' },
    { icon: 'pi-heart', title: 'Stock health audit', text: 'Finds negative stock, oversold items, products without suppliers and items below minimum, then lists the fixes. Runs weekly.' },
    { icon: 'pi-trash', title: 'Dead stock review', text: "Totals the capital tied up in products that haven't sold and suggests what to clear or stop buying. Runs monthly." },
    { icon: 'pi-sun', title: 'Morning operations brief', text: "A short daily summary of yesterday's sales, today's unfulfilled orders, low stock and deliveries due." },
  ],
};

export const AGENT_CUSTOM = {
  eyebrow: 'Custom agent service',
  title: "Need An Agent Now? We'll Build A Custom Linnworks Agent For You.",
  text: 'Every Linnworks setup is different. Rishvi builds agents around your own rules, channels, suppliers and reports, on top of the same MCP tools.',
  steps: [
    { icon: 'pi-phone', title: 'Discovery call', text: 'we map the task you want off your team’s plate and the rules behind it.' },
    { icon: 'pi-book', title: 'Playbook and tools', text: 'we define the agent’s steps, the Linnworks tools it uses and where approval is needed.' },
    { icon: 'pi-eye', title: 'Test on your data', text: 'the agent runs in report-only mode so you can check its decisions first.' },
    { icon: 'pi-play', title: 'Go live', text: 'switch on the schedule and approvals. We monitor and refine with you.' },
  ],
};

export const AGENT_FAQ_HEAD = { eyebrow: "FAQ's", title: 'Linnworks AI Agent: Questions and Answers' };

export const AGENT_FAQS = [
  { question: 'What is a Linnworks AI agent?', answer: 'A Linnworks AI agent is software that uses AI to carry out an operational job in Linnworks on its own, such as checking stock cover every morning and preparing purchase orders. It reads Linnworks data through Rishvi’s MCP server and asks a person to approve any change.' },
  { question: 'When will the Linnworks AI agent be available?', answer: 'The packaged Linnworks AI agent is in development. Join the early-access list to hear first. If you need an agent sooner, Rishvi builds custom Linnworks agents today.' },
  { question: 'Can a Linnworks AI agent create purchase orders?', answer: 'It can prepare them. The agent drafts purchase orders that respect supplier minimum order quantity, pack size and lead time, and only creates them in Linnworks after a person in your team approves.' },
  { question: 'Is it safe to let AI act in Linnworks?', answer: 'Agents read data freely but cannot change anything without approval. Only two tools write to Linnworks, update_stock_levels and create_purchase_order, and both sit behind an approval step with a log of who approved what.' },
  { question: 'What is a custom Linnworks agent?', answer: 'A custom agent is built by Rishvi around your own rules, channels, suppliers and reports. We define the playbook with you, test it in report-only mode on your data, then switch on scheduling and approvals.' },
  { question: 'How is an agent different from Hyperstock AI?', answer: 'Hyperstock AI is a read-only assistant that answers questions when you ask. An agent works towards a goal on a schedule or trigger and can prepare actions for approval. Both use the same Linnworks MCP tools.' },
];

export const AGENT_CONTACT = {
  eyebrow: 'Contact Us',
  title: 'Be First To Put A Linnworks AI Agent To Work',
  paragraphs: [
    'Linnworks AI agents that check stock, triage blocked orders and draft purchase orders for your approval. Packaged agent coming soon; custom agents available now.',
    'Join the early-access list, or tell us the job you want automated and we’ll scope a custom agent.',
  ],
  cta: 'Request a custom agent',
};
