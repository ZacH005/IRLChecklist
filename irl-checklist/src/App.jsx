import { useState } from "react";

const DIMENSIONS = [
  {
    "key": "CRL",
    "name": "Customer Readiness Level",
    "emoji": "🤝",
    "recommendation": "Deepen direct customer validation and document the strongest recurring pain points before advancing sales efforts.",
    "levels": [
      {
        "level": 1,
        "description": "Hypothesis of possible needs in the market.",
        "items": [
          "Thinking (yourself) that a possible need/problem or opportunity might exist in a market",
          "No clear hypotheses on who customers are, what problems exist, etc. If hypotheses exist they are unclear, speculative, and there is no proof or analysis to support assumptions",
          "Limited or non-existing knowledge of the market and customers/users (who they are etc)"
        ]
      },
      {
        "level": 2,
        "description": "Identified specific needs in market.",
        "items": [
          "Some market research is performed, typically derived from secondary sources",
          "Brief familiarity with the market, possible customers and their problems/needs, and alternatives",
          "There is a first reasonably clear description of the problem/need hypothesis"
        ]
      },
      {
        "level": 3,
        "description": "First market feedback established.",
        "items": [
          "Received feedback from primary market research, i.e. direct contacts with e.g. a few possible users/customers or persons with industry/market knowledge (experts)",
          "A more developed understanding of possible customers and possible customer segments",
          "The problem/need hypothesis is clear and updated after customer/user/expert feedback"
        ]
      },
      {
        "level": 4,
        "description": "Confirmed problem/needs from several customers or users",
        "items": [
          "The problem/need and its importance is confirmed from multiple customers or users. Numbers are typically limited but depend on B2B/B2C and market structure (e.g. 5-10 in B2B, if market is concentrated 2-5 market leading customers, in B2C higher e.g. 10-20)",
          "Customer segmentation with initial basic customer profiles in place",
          "Identified who the user, paying customer, and decision maker is",
          "A product/service hypothesis with clear positioning against customer alternatives is defined based on customer/user feedback"
        ]
      },
      {
        "level": 5,
        "description": "Established interest and relations with customers.",
        "items": [
          "Customers/users have expressed interest for the product/service and confirmed that it can solve customers’ problems/needs (i.e. initial problem-solution fit)",
          "Established relationships with potential target customers/users providing input",
          "Decided which target customers/segments to focus on first",
          "Defined first sales pitch and value proposition adapted to target customer/segment"
        ]
      },
      {
        "level": 6,
        "description": "Benefits confirmed by first customer testing.",
        "items": [
          "Testing of product/service by customers/users has confirmed the customer value and benefits",
          "Updated sales pitch and value proposition based on customer/user feedback",
          "Defined first sales/user acquisition process and initiated structured sales activities",
          "Identified possible partners or key stakeholders relevant to reach customers/users"
        ]
      },
      {
        "level": 7,
        "description": "Customers in extended testing or first test sales. Small number of active users.",
        "items": [
          "Customer agreements in place - first sales/test sales of early versions of product/service or customers/users engaged in product/service qualifications or extended testing",
          "Small number of active users of early versions of product/service",
          "Discussions initiated with partners to reach customers/users (when relevant)"
        ]
      },
      {
        "level": 8,
        "description": "First commercial sales and implemented sales process. Substantial number of active users.",
        "items": [
          "Market ready product/service sold to customers at/near target market price",
          "Substantial number of active users of market ready product/service (initial customer traction)",
          "Sales/user acquisition process implemented with dedicated people and support systems (CRM system, etc.)",
          "Agreements in place with first partners to reach customers (when relevant)"
        ]
      },
      {
        "level": 9,
        "description": "Widespread sales that scale. Large number of active users with substantial growth.",
        "items": [
          "Widespread product deployment, sales to several customers in a repeatable and scalable way (including through partners when relevant)",
          "Large and substantially growing number of active users (significant customer traction)",
          "Company focuses on business development, customer acquisition, growth of sales, efforts to build user/customer demand, etc."
        ]
      }
    ]
  },
  {
    "key": "TRL",
    "name": "Technology Readiness Level",
    "emoji": "⚙️",
    "recommendation": "Tighten technical validation with the next realistic prototype milestone and explicit performance evidence.",
    "levels": [
      {
        "level": 1,
        "description": "Interesting research results or initial technology idea identified",
        "items": [
          "Research results with potential benefits or useful applications identified",
          "Vague idea of a technology to be developed"
        ]
      },
      {
        "level": 2,
        "description": "Technology concept and/or application formulated",
        "items": [
          "A potential technology concept is defined and described.",
          "Practical applications can be defined/researched but are speculative, and no proof or detailed analysis that the technology will work."
        ]
      },
      {
        "level": 3,
        "description": "Proof-of-concept of critical functions and/or characteristics in laboratory",
        "items": [
          "Tests in the laboratory environment (analytical and/or experimental) of important parameters/features/functions show that the technology concept could work and be feasible",
          "Laboratory environment = the environment where technology is typically developed, often not the same environment as where it will be used",
          "Active R&D is initiated to develop the technology further",
          "There is a first idea of end-user requirements/specifications and/or use cases"
        ]
      },
      {
        "level": 4,
        "description": "Technology validation in laboratory",
        "items": [
          "Basic components are integrated and shown to work together and produce desired results in the laboratory environment",
          "Test results give initial evidence indicating that the technology concept will work (i.e. initial validation)"
        ]
      },
      {
        "level": 5,
        "description": "Technology validation in relevant environment",
        "items": [
          "Basic components are integrated and tested in a more realistic form in a relevant environment",
          "Test results give evidence indicating that the technology will work (i.e. validation)",
          "Relevant environment = lab or other controlled environment that simulates the most important and most stressing aspects of the operational environment",
          "More defined end-user requirements/specifications and/or use cases based on feedback from users"
        ]
      },
      {
        "level": 6,
        "description": "Technology prototype demonstration in relevant environment",
        "items": [
          "Representative model or prototype of the technology has been shown to actually work in a relevant environment",
          "Representative model = a functional form of the technology, generally reduced in scale, near or at operational specification",
          "Prototype = the technology in a form that can be used to evaluate the technical and/or manufacturing feasibility or utility of the final product",
          "Shown to actually work (i.e. demonstration) = meet most of the important performance requirements"
        ]
      },
      {
        "level": 7,
        "description": "Technology prototype demonstration in operational environment",
        "items": [
          "Prototype near or at the complete technology has been shown to actually work in an operational environment",
          "Operational environment = environment that addresses all the operational requirements and specifications where the technology will be used by the end-users",
          "Complete end-user requirements/specifications and/or use cases in place"
        ]
      },
      {
        "level": 8,
        "description": "Technology complete and demonstrated in actual operations",
        "items": [
          "Complete technology has been proven to work in actual operations by first users",
          "Complete technology = Complete - contains everything the user needs to use it; Functional - everything works the way it should for the user to solve their problem/need; Compatible - compatible with people, processes, goals, infrastructure, systems, etc. at the user; Producible - possible to produce at a reasonable cost",
          "Proven to work = meet all performance requirements/specifications",
          "Actual operations = implemented by end-users on their own in their day-to-day operations"
        ]
      },
      {
        "level": 9,
        "description": "Technology complete and proven in actual operations over time.",
        "items": [
          "Complete technology is scalable and proven to work in actual operations by several users over time",
          "Continuous development, improvement, optimization of technology and production is ongoing"
        ]
      }
    ]
  },
  {
    "key": "BRL",
    "name": "Business Model Readiness Level",
    "emoji": "📈",
    "recommendation": "Strengthen the business model with real customer evidence, grounded economics, and clearer competitive positioning.",
    "levels": [
      {
        "level": 1,
        "description": "No or unclear hypothesis of possible business idea, market potential, and competition.",
        "items": [
          "Non-existing or vague and unspecific description of the potential business idea, value proposition or business model",
          "Little insight into the market and its potential/size-hypothesizing on possible applications",
          "Little knowledge or insight into competition and alternative solutions"
        ]
      },
      {
        "level": 2,
        "description": "First hypothesis of possible business concept (in any format) and identified overall market potential and competition.",
        "items": [
          "Described the proposed business concept and value proposition in some structured form",
          "Brief familiarity with market size, segments, and competitive landscape (listed some competitors/alternatives) – typically derived from secondary sources"
        ]
      },
      {
        "level": 3,
        "description": "Description of sustainable business model and target market(s), including competition.",
        "items": [
          "Description of a proposed business model in place (e.g. in canvas format)",
          "Description of relevant factors in the business model causing positive and negative contribution to environment and society (see KTH IRL user guide)",
          "Defined target market(s) and estimates of market size (TAM, SAM)",
          "Defined competition and identified relevant input from competitive landscape on your business model (competitors’ positioning, business models, prices, etc.)"
        ]
      },
      {
        "level": 4,
        "description": "First calculations indicating economically viable business model. First assessment indicating environmental and social sustainability.",
        "items": [
          "First version of simplified P&L projections for proposed business model (main costs, main revenue streams) indicate economic viability (based on own assumptions and guesstimates)",
          "Initial assessment of positive vs negative contribution indicates environmental and social sustainability, based on own assumptions and guesstimates (see KTH IRL user guide)"
        ]
      },
      {
        "level": 5,
        "description": "Key assumptions in sustainable business model tested on market.",
        "items": [
          "Received feedback on revenue side of business model (e.g. revenue model, pricing, etc.) from a few potential customers or persons with market knowledge (experts)",
          "Received feedback on cost side of business model (e.g. production, supply chain, etc.) from a few external partners/suppliers/experts",
          "Key measures to increase positive and decrease negative environmental and social contribution specified in business model (see KTH IRL user guide)",
          "Updated P&L projection based on market feedback indicates economic viability",
          "Target market description (target segment(s), TAM, SAM, SOM, and competitive analysis) updated based on market feedback"
        ]
      },
      {
        "level": 6,
        "description": "Full sustainable business model tested on customers, partners, suppliers (e.g. by test sales), calculations show economic viability.",
        "items": [
          "Complete sustainable business model (cost side and revenue side), including key measures to increase positive and decrease negative environmental and social contribution, is tested in one/a few realistic business scenarios (test sale, pre-order, pilot, tender, etc.)",
          "Complete financial projections based on feedback from realistic business case show economic viability"
        ]
      },
      {
        "level": 7,
        "description": "Viability of sustainable business model (pricing, revenue model, etc.) validated by initial commercial sales.",
        "items": [
          "First sales/revenue on commercial terms demonstrate willingness to pay from significant number of customers",
          "Complete financial projections validated by first sales/revenue and data",
          "Agreements in place with key suppliers, partners, channel partners etc. (aligned with your sustainability expectations) to execute your business model"
        ]
      },
      {
        "level": 8,
        "description": "Sales and metrics show that sustainable business model is viable",
        "items": [
          "Sales and other metrics from initial business operations (1-3 years) show sustainable business model holds and can meet internal and external expectations on profit, scalability, and environmental and social impact",
          "Sales channels and supply chain (aligned with your sustainability expectations) are in place and operational",
          "Business model is set but is fine-tuned to improve revenue/cost and leverage sustainability"
        ]
      },
      {
        "level": 9,
        "description": "Sustainable business model proven to meet internal and external expectations on profit, scalability and impact over time",
        "items": [
          "Sustainable business model is operational and business meets or exceeds internal and external expectations on profit, growth, scalability, and environmental and social impact",
          "Credible systems and metrics in use to track economic, environmental, social performance",
          "Historic data on economic, environmental, and social performance proves viable business which is profitable and sustainable over time"
        ]
      }
    ]
  },
  {
    "key": "IPRL",
    "name": "IP Rights Readiness Level",
    "emoji": "🛡️",
    "recommendation": "Clarify ownership, protection choices, and freedom-to-operate early so the IP position supports the business plan.",
    "levels": [
      {
        "level": 1,
        "description": "Hypothesizing on your possible IPR.",
        "items": [
          "Hypothesizing that results or ideas might contain some possible form of IPR",
          "Some ideas on possible IPR may exist, but are speculative",
          "No description and documentation of the possible IPR",
          "Limited knowledge or unclarity regarding relevant legal aspects (ownership, use-rights etc.)",
          "Limited knowledge of uniqueness and the technical field, state-of-the art, publications etc."
        ]
      },
      {
        "level": 2,
        "description": "Identified different forms of possible IPR that you have/create. Ownership is clarified and you can use relevant IPR.",
        "items": [
          "Mapped different forms of IPR that exist or could come up during development (see IPR list)",
          "Specific ideas for IPR exist, but are not well described and defined.",
          "Agreements related to IP are identified and ownership is clarified. Inventors/creators are clarified. Knowledge of applicable IP policies, potential restrictions in contracts, etc."
        ]
      },
      {
        "level": 3,
        "description": "Description of possible key IPR in some detail. Initial evaluation of potential to protect key IPR.",
        "items": [
          "Considered what forms of IPR are key/most important and could/should be protected",
          "Sufficiently detailed description of possible IPR to evaluate possibility for protection",
          "Evaluation of protection possibilities via e.g. own searches of publications, state-of-the art solutions etc. in the field",
          "Possibly initial searches or analysis by professional of relevant prior art or conflicting IPR"
        ]
      },
      {
        "level": 4,
        "description": "Confirmed that IPR protection is possible and for what. Decided why to protect certain IPR (business relevance).",
        "items": [
          "Confirmed possibilities for protection of key IPR through searches/analysis by a professional",
          "Analyzed (ideally with professional) the key IPR and what the priorities should be for what to protect to create value for the business/project",
          "Possibly filed first IPR application/registration in some less elaborate form, e.g. own filing of trademark, “provisional” patent application (i.e. not professionally drafted), etc."
        ]
      },
      {
        "level": 5,
        "description": "Draft of IPR strategy to create business value is in place. Filed first formal application/registration of key IPR.",
        "items": [
          "Draft IPR strategy in place - first analysis and plan (preferably by professional) on how different IPR can be used to protect and be of value for the business. (see e.g. tool KTH IPR Strategy)",
          "First complete formal application/registration of key IPR filed in cooperation with professional",
          "Basic agreements in place to ascertain control of key IPR (e.g. assignments, ownership, etc.)"
        ]
      },
      {
        "level": 6,
        "description": "First complete IPR strategy in place considering different IPR. Positive response on filed applications/registrations.",
        "items": [
          "Complete IPR strategy elaborated (validated by professional) that supports business strategy",
          "Identified possible complementary/additional IPR to protect",
          "Initial assessment of freedom-to-operate with the purpose to understand the IPR landscape in the field (who is active, what key IPR) and if you could be dependent on/stopped by other IPR",
          "Positive response on applications from authorities, and analysis of response performed",
          "If no positive response: analysis performed together with professional with good prospects"
        ]
      },
      {
        "level": 7,
        "description": "Filed formal applications/registrations of key IPR in relevant countries/regions according to IPR strategy.",
        "items": [
          "Entered into national/regional phase (US, EU, JP etc.) with key IPR application/registration",
          "More complete assessment of freedom-to-operate and clear understanding of dependency on/restriction by other IPR"
        ]
      },
      {
        "level": 8,
        "description": "IPR strategy and management practices fully implemented. Filed formal applications/registrations of complementary IPR.",
        "items": [
          "IPR strategy is fully implemented. IPR is proactively used to support/protect business, IPR related agreements are professionally managed, process for securing new IPR in place",
          "Key IPR is granted in first country/region with relevant scope for business",
          "Filed complementary or additional IPR application(s)/registration(s)"
        ]
      },
      {
        "level": 9,
        "description": "Strong IPR support and protection for business. IPR protection granted and maintained in relevant countries.",
        "items": [
          "IPR strategy is proven to support and create value for business",
          "Key and complementary IPR is granted and maintained in several countries relevant for business",
          "Agreements in place to access all necessary external IPR"
        ]
      }
    ]
  },
  {
    "key": "TMRL",
    "name": "Team Readiness Level",
    "emoji": "🧠",
    "recommendation": "Close the most critical capability gaps and make ownership, roles, and long-term hiring plans more explicit.",
    "levels": [
      {
        "level": 1,
        "description": "Lack of necessary competencies/resources to verify idea. Little insight into team needs (typically an individual).",
        "items": [
          "Typically an individual lacking necessary competencies in key areas such as tech, business etc.",
          "Little insight into needed/necessary competencies and other needed resources (e.g. partners, service providers etc.) to verify and develop the idea"
        ]
      },
      {
        "level": 2,
        "description": "Limited competencies in place to start verifying the idea. First idea of additional necessary competencies or resources.",
        "items": [
          "Limited competencies and/or capacity present - typically 1-2 persons",
          "First idea of which additional persons/competencies that could be needed to verify/develop idea",
          "First idea of overall goal for the project"
        ]
      },
      {
        "level": 3,
        "description": "Some of necessary competencies in place to verify/develop idea. Defined needed competencies (and plan for finding them).",
        "items": [
          "One or several individuals that possess some, but not all, of necessary competencies and capacity to start verifying the idea",
          "Needs and gaps in competencies, capacity, and team diversity are identified",
          "Initial plan is defined for how to find needed prioritized competencies (near-term, <1 year)"
        ]
      },
      {
        "level": 4,
        "description": "A champion is present with clear idea of direction (startup/other way). Several needed competencies in place, initiated plan to complement.",
        "items": [
          "Team (or individual) has a clear idea of how to take the idea to market (startup, IP deal, etc.)",
          "At least one champion (driver and committed to take the idea forward) is present",
          "Several, but not all, necessary competencies are present, typically multiple individuals",
          "A plan is in place and initiated to find necessary additional competencies and capacity (described e.g. in a requirement profile), keeping in mind team diversity",
          "The team has started discussions on roles, commitment, ownership, etc. going forward"
        ]
      },
      {
        "level": 5,
        "description": "Initial founding team with main needed competencies and capacity. Team agrees on ownership, roles, goals, and visions.",
        "items": [
          "An initial founding team working together and all spending significant time. The founding team jointly having main needed competencies and capacity to start building this startup",
          "Aligned team with clarified roles, shared goals and visions, and clear commitment (e.g. time spent)",
          "The team has agreed on their respective shares (signed agreement). Ownership is balanced and incentivizing, and reflects historical and future commitment and contribution",
          "Activities to get additional competencies and capacity in progress, keeping in mind team diversity",
          "Initial systems/processes/tools in place to share knowledge and information within the team"
        ]
      },
      {
        "level": 6,
        "description": "Complementary, diverse, and committed founding team with all necessary competencies and capacity to start building a business.",
        "items": [
          "Complementary and diverse founding team in place, capable of starting to build a business",
          "All key competencies and capacity necessary for the near term are present, incl. a clear CEO",
          "Committed team where everyone feels responsibility and accountability",
          "Started recruitment of advisors and/or board members, keeping in mind board diversity",
          "Awareness of risks to team performance (conflicts, burn-out/mental health, politics, etc.)",
          "Awareness of risks to team performance (internal conflicts, politics, conflicting agendas/priorities)"
        ]
      },
      {
        "level": 7,
        "description": "Well-functioning team and culture in place. Growth plan for expanding team and building organization over time.",
        "items": [
          "Well-functioning team with clear roles",
          "Goals, vision, purpose, and culture are clearly articulated and documented to support team and organizational development",
          "Plan in place for how to build necessary organization and grow the team over longer term (~2 yrs)",
          "Processes/systems and plan for continuous learning and staff development implemented",
          "Board and advisors operational and supporting business and organizational development"
        ]
      },
      {
        "level": 8,
        "description": "Professional organization in place (board, CEO, management, staff).",
        "items": [
          "There is a clear leadership and management team with relevant professional experience",
          "Competent and diverse board, and relevant advisors in place and professionally used",
          "HR policies/processes/responsible in place to assure good HR practices and team diversity",
          "Necessary recruitments according to longer term plan are ongoing to ascertain relevant competencies, capacity, and diversity in the organization",
          "All levels of the organization are properly trained and motivated"
        ]
      },
      {
        "level": 9,
        "description": "High performing, well-structured organization at all levels that is maintained, develops, and performs over time.",
        "items": [
          "The organization is high performing and well-functioning (cooperation, social environment, etc.)",
          "All levels of the organization actively engaged in continuous learning and development",
          "Organizational culture, structure, processes etc. are continuously improved and developed",
          "Incentives/rewards are aligned to motivate the whole organization to reach goals and perform well",
          "The management team is maintained, developed and performs over time"
        ]
      }
    ]
  },
  {
    "key": "FRL",
    "name": "Funding Readiness Level",
    "emoji": "💶",
    "recommendation": "Sharpen the funding story, runway assumptions, and investor materials before the next fundraising step.",
    "levels": [
      {
        "level": 1,
        "description": "No clear description of initial verification activities. No clear view of initial funding needs and funding options.",
        "items": [
          "Little or no insight into relevant activities and costs to verify potential/feasibility of the idea",
          "Little insight into different funding options and funding types.",
          "Little insight into different funding options and funding types."
        ]
      },
      {
        "level": 2,
        "description": "Description of initial verification activities. Defined funding need and funding sources for initial milestones.",
        "items": [
          "Initial activities and costs to verify potential/feasibility if idea is described (e.g. 1-6 months)",
          "There is a basic plan with funding options for the initial milestones (e.g. 1-6 months)"
        ]
      },
      {
        "level": 3,
        "description": "Funding for initial verification plan secured.",
        "items": [
          "Secured sufficient funding for initial verification/feasibility activities (e.g. 1-6 months)",
          "Awareness of different funding types (own, soft, equity, customer, etc.) and typical pros/cons"
        ]
      },
      {
        "level": 4,
        "description": "Funding for elaborated verification plan secured.",
        "items": [
          "Elaborated plan to verify commercial potential of the idea is in place (e.g. 3-12 months, incl. hypotheses to verify, goals, activities, timeline, funding need)",
          "Identified relevant funding sources",
          "Secured sufficient funding to implement substantial part of the verification plan"
        ]
      },
      {
        "level": 5,
        "description": "First pitch for funding tested on relevant audience. Defined near term funding need and decided on funding strategy.",
        "items": [
          "Pitch for funding (e.g. investor pitch format) elaborated and tested on relevant audience",
          "Initial PnL budget & cash flow for coming 12 months in spreadsheet format",
          "Decided on funding strategy and funding sources to reach a viable business model - based on pros/cons of the different strategies",
          "Insight into requirements and consequences of external funding (in particular equity funding) on business model, control, and ownership"
        ]
      },
      {
        "level": 6,
        "description": "Improved pitch for funding tested on relevant audience. Initiated contacts with relevant external funding sources.",
        "items": [
          "Updated/improved pitch for funding has been tested on relevant audience",
          "3-5 year PnL budget and cash flow for business/project in spreadsheet format that clarifies near and medium term funding need"
        ]
      },
      {
        "level": 7,
        "description": "Initial discussions with potential external funding sources. Complete pitch for funding and supporting material ready.",
        "items": [
          "Discussions with potential external funding sources around a defined offer (how much money, for what, conditions, valuation, etc.)",
          "Pitch for funding is complete, tried, and tested, and a business plan (or equivalent) with financial projections, milestone plan etc. is in place",
          "Basic accounting systems and documentation in place for financial follow-up"
        ]
      },
      {
        "level": 8,
        "description": "Term sheet level discussions with one or several external funding sources that show clear interest.",
        "items": [
          "Concrete discussions (term sheet level) with one or several external funding sources that clearly are interested",
          "All necessary supporting material for external funding in place (financials, business plan, etc.)",
          "Correctly established legal entity with ownership structure suitable for the planned funding source (not fragmented or significant parts held by inactive/non-contributing persons)",
          "All key legal, IPR, financial, and operational documentation and agreements collected and available for external review (due diligence)"
        ]
      },
      {
        "level": 9,
        "description": "Secured funding for at least 6-12 months of operations. Financial monitoring and forecasting system fully implemented.",
        "items": [
          "Secured funding for at least 6-12 month runway according to current business plan/operational plan – the money is on the bank account or predictable recurring revenue",
          "Fully implemented financial monitoring and bookkeeping system for continuous control of current financial status, and good forecast/foresight of future funding needs"
        ]
      }
    ]
  }
];

function createInitialResponses() {
  const initial = {};

  for (const dimension of DIMENSIONS) {
    initial[dimension.key] = {
      checks: dimension.levels.map((level) => level.items.map(() => false)),
      notes: dimension.levels.map(() => ""),
    };
  }

  return initial;
}

function getDimensionScore(dimension, dimensionResponse) {
  let score = 0;

  for (let index = 0; index < dimension.levels.length; index += 1) {
    const levelChecks = dimensionResponse.checks[index];
    const completed = levelChecks.every(Boolean);

    if (!completed) {
      break;
    }

    score = index + 1;
  }

  return score;
}

function getScoreTone(score) {
  if (score >= 7) {
    return {
      pill: "bg-emerald-100 text-emerald-700 ring-emerald-200",
      border: "border-emerald-200",
      label: "Green",
    };
  }

  if (score >= 4) {
    return {
      pill: "bg-amber-100 text-amber-700 ring-amber-200",
      border: "border-amber-200",
      label: "Amber",
    };
  }

  return {
    pill: "bg-rose-100 text-rose-700 ring-rose-200",
    border: "border-rose-200",
    label: "Red",
  };
}

function getLevelState(score, levelNumber, isComplete, previousLevelsComplete) {
  if (isComplete && levelNumber <= score) {
    return "complete";
  }

  if (previousLevelsComplete) {
    return "active";
  }

  return "locked";
}

function polygonPoints(cx, cy, radius, count) {
  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / count;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    return `${x},${y}`;
  }).join(" ");
}

function radarPoints(dimensions, scores, cx, cy, radius) {
  return dimensions
    .map((dimension, index) => {
      const angle = -Math.PI / 2 + (index * Math.PI * 2) / dimensions.length;
      const scaledRadius = (Math.max(scores[dimension.key], 0) / 9) * radius;
      const x = cx + Math.cos(angle) * scaledRadius;
      const y = cy + Math.sin(angle) * scaledRadius;
      return `${x},${y}`;
    })
    .join(" ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatReportDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getScoreBand(score) {
  if (score >= 7) {
    return "Strong";
  }

  if (score >= 4) {
    return "Developing";
  }

  return "Early";
}

function getOverviewSummary(averageScore) {
  if (averageScore >= 7) {
    return "The project shows a strong readiness profile with multiple areas close to operational maturity.";
  }

  if (averageScore >= 4) {
    return "The project is progressing, with a mix of validated areas and a few dimensions that still need focused evidence.";
  }

  return "The project is still early, and the next step is to build foundational evidence across the core dimensions.";
}

function getOverviewProfileLabel(averageScore) {
  if (averageScore >= 7) {
    return "Strong";
  }

  if (averageScore >= 4) {
    return "Developing";
  }

  return "Early";
}

function buildOverviewReport({ scores, generatedAt }) {
  const rankedDimensions = DIMENSIONS.map((dimension) => ({
    dimension,
    score: scores[dimension.key],
  })).sort((left, right) => {
    if (left.score !== right.score) {
      return left.score - right.score;
    }

    return DIMENSIONS.findIndex((dimension) => dimension.key === left.dimension.key) -
      DIMENSIONS.findIndex((dimension) => dimension.key === right.dimension.key);
  });

  const strongestDimensions = [...rankedDimensions].reverse().slice(0, 2);
  const weakestDimensions = rankedDimensions.slice(0, 2);
  const averageScore = Object.values(scores).reduce((total, score) => total + score, 0) / DIMENSIONS.length;
  const reportDate = formatReportDate(generatedAt);

  const overviewRows = DIMENSIONS.map((dimension) => {
    const score = scores[dimension.key];

    return `
      <tr>
        <td>
          <div class="dimension-name">${escapeHtml(dimension.key)}</div>
          <div class="dimension-subtitle">${escapeHtml(dimension.name)}</div>
        </td>
        <td class="score-cell">${score}/9</td>
        <td>
          <span class="status-chip status-${getScoreBand(score).toLowerCase()}">${getScoreBand(score)}</span>
        </td>
      </tr>
    `;
  }).join("");

  const strengths = strongestDimensions
    .map(
      ({ dimension, score }) => `
        <li>
          <strong>${escapeHtml(dimension.key)} ${score}/9</strong>
          <span>${escapeHtml(dimension.name)}</span>
        </li>
      `
    )
    .join("");

  const priorities = weakestDimensions
    .map(
      ({ dimension, score }) => `
        <li>
          <strong>${escapeHtml(dimension.key)} ${score}/9</strong>
          <span>${escapeHtml(dimension.recommendation)}</span>
        </li>
      `
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IRL readiness overview</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #0f172a;
        --muted: #64748b;
        --line: #dbe3ee;
        --panel: #ffffff;
        --soft: #f8fafc;
        --blue: #2563eb;
        --green: #15803d;
        --amber: #b45309;
        --red: #be123c;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 40px 24px;
        font-family: "Avenir Next", "Segoe UI", Inter, system-ui, sans-serif;
        color: var(--ink);
        background: linear-gradient(180deg, #f8fbff 0%, #f4f7fb 100%);
      }

      .page {
        max-width: 980px;
        margin: 0 auto;
        background: var(--panel);
        border: 1px solid rgba(219, 227, 238, 0.95);
        border-radius: 28px;
        padding: 36px;
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      }

      .eyebrow {
        margin: 0 0 10px;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 11px;
        font-weight: 700;
        color: var(--blue);
      }

      h1 {
        margin: 0;
        font-size: 32px;
        line-height: 1.15;
      }

      .lede {
        margin: 12px 0 0;
        max-width: 760px;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.7;
      }

      .meta {
        margin-top: 14px;
        color: var(--muted);
        font-size: 12px;
      }

      .summary-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
        margin-top: 28px;
      }

      .summary-card {
        background: var(--soft);
        border: 1px solid var(--line);
        border-radius: 20px;
        padding: 18px;
      }

      .summary-card .label {
        display: block;
        color: var(--muted);
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        font-weight: 700;
      }

      .summary-card .value {
        display: block;
        margin-top: 10px;
        font-size: 26px;
        line-height: 1;
        font-weight: 700;
      }

      .summary-card .detail {
        display: block;
        margin-top: 6px;
        color: var(--muted);
        font-size: 13px;
        line-height: 1.5;
      }

      .section {
        margin-top: 30px;
      }

      .section h2 {
        margin: 0 0 12px;
        font-size: 18px;
      }

      .section p {
        margin: 0;
        color: var(--muted);
        font-size: 13px;
        line-height: 1.65;
      }

      .table-wrap {
        margin-top: 16px;
        border: 1px solid var(--line);
        border-radius: 20px;
        overflow: hidden;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th,
      td {
        padding: 14px 18px;
        text-align: left;
        border-bottom: 1px solid var(--line);
        vertical-align: middle;
      }

      thead th {
        background: #f8fafc;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.14em;
        font-size: 11px;
      }

      tbody tr:last-child td {
        border-bottom: none;
      }

      .dimension-name {
        font-size: 14px;
        font-weight: 700;
      }

      .dimension-subtitle {
        margin-top: 4px;
        color: var(--muted);
        font-size: 12px;
      }

      .score-cell {
        font-weight: 700;
      }

      .status-chip {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
        border: 1px solid transparent;
      }

      .status-strong {
        background: #dcfce7;
        color: var(--green);
        border-color: #bbf7d0;
      }

      .status-developing {
        background: #fef3c7;
        color: var(--amber);
        border-color: #fde68a;
      }

      .status-early {
        background: #ffe4e6;
        color: var(--red);
        border-color: #fecdd3;
      }

      .columns {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-top: 18px;
      }

      .callout {
        background: var(--soft);
        border: 1px solid var(--line);
        border-radius: 20px;
        padding: 18px;
      }

      .callout h3 {
        margin: 0;
        font-size: 15px;
      }

      .callout ul {
        margin: 14px 0 0;
        padding: 0;
        list-style: none;
      }

      .callout li + li {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid rgba(219, 227, 238, 0.9);
      }

      .callout strong {
        display: block;
        font-size: 13px;
      }

      .callout span {
        display: block;
        margin-top: 4px;
        color: var(--muted);
        font-size: 12px;
        line-height: 1.5;
      }

      .footer-note {
        margin-top: 22px;
        padding-top: 16px;
        border-top: 1px solid var(--line);
        color: var(--muted);
        font-size: 12px;
      }

      @media print {
        body {
          background: #fff;
          padding: 0;
        }

        .page {
          border: none;
          border-radius: 0;
          box-shadow: none;
          padding: 24px;
        }
      }

      @media (max-width: 820px) {
        .summary-grid,
        .columns {
          grid-template-columns: 1fr;
        }

        .page {
          padding: 24px;
        }

        h1 {
          font-size: 26px;
        }
      }
    </style>
  </head>
  <body>
    <article class="page">
      <header>
        <p class="eyebrow">KTH Innovation IRL Self-Assessment</p>
        <h1>IRL readiness overview</h1>
        <p class="lede">${escapeHtml(getOverviewSummary(averageScore))}</p>
        <div class="meta">Generated ${escapeHtml(reportDate)} · Overview only, no detailed checklist items or notes included.</div>
      </header>

      <section class="summary-grid" aria-label="Summary metrics">
        <div class="summary-card">
          <span class="label">Average score</span>
          <span class="value">${averageScore.toFixed(1)}</span>
          <span class="detail">Across ${DIMENSIONS.length} dimensions on a 0 to 9 scale.</span>
        </div>
        <div class="summary-card">
          <span class="label">Strongest area</span>
          <span class="value">${escapeHtml(strongestDimensions[0].dimension.key)}</span>
          <span class="detail">${strongestDimensions[0].score}/9 in ${escapeHtml(strongestDimensions[0].dimension.name)}</span>
        </div>
        <div class="summary-card">
          <span class="label">Priority area</span>
          <span class="value">${escapeHtml(weakestDimensions[0].dimension.key)}</span>
          <span class="detail">${weakestDimensions[0].score}/9 in ${escapeHtml(weakestDimensions[0].dimension.name)}</span>
        </div>
        <div class="summary-card">
          <span class="label">Readiness profile</span>
          <span class="value">${escapeHtml(getOverviewProfileLabel(averageScore))}</span>
          <span class="detail">Concise view of the current maturity state.</span>
        </div>
      </section>

      <section class="section">
        <h2>Dimension snapshot</h2>
        <p>The table below gives a general read on each dimension and its current status band.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${overviewRows}
            </tbody>
          </table>
        </div>
      </section>

      <section class="columns" aria-label="Strengths and priorities">
        <div class="callout">
          <h3>Top strengths</h3>
          <ul>${strengths}</ul>
        </div>
        <div class="callout">
          <h3>Primary priorities</h3>
          <ul>${priorities}</ul>
        </div>
      </section>

      <div class="footer-note">
        This report is intended as a concise management overview. Use the in-app assessment for the full checklist and evidence notes.
      </div>
    </article>
  </body>
</html>`;
}

function downloadOverviewReport({ scores }) {
  const generatedAt = new Date();
  const filename = `irl-readiness-overview-${generatedAt.toLocaleDateString("sv-SE")}.html`;
  const html = buildOverviewReport({ scores, generatedAt });
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function App() {
  const [phase, setPhase] = useState("assessment");
  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);
  const [responses, setResponses] = useState(createInitialResponses);

  const scores = DIMENSIONS.reduce((accumulator, dimension) => {
    accumulator[dimension.key] = getDimensionScore(dimension, responses[dimension.key]);
    return accumulator;
  }, {});

  const currentDimension = DIMENSIONS[currentDimensionIndex];
  const currentResponse = responses[currentDimension.key];
  const currentScore = scores[currentDimension.key];
  const progressPercent = ((currentDimensionIndex + 1) / DIMENSIONS.length) * 100;

  const lowestDimensions = [...DIMENSIONS]
    .sort((left, right) => {
      const leftScore = scores[left.key];
      const rightScore = scores[right.key];

      if (leftScore !== rightScore) {
        return leftScore - rightScore;
      }

      return DIMENSIONS.findIndex((dimension) => dimension.key === left.key) -
        DIMENSIONS.findIndex((dimension) => dimension.key === right.key);
    })
    .slice(0, 2);

  const handleCheckToggle = (dimensionKey, levelIndex, itemIndex) => {
    setResponses((previous) => ({
      ...previous,
      [dimensionKey]: {
        ...previous[dimensionKey],
        checks: previous[dimensionKey].checks.map((levelChecks, currentLevelIndex) => {
          if (currentLevelIndex !== levelIndex) {
            return levelChecks;
          }

          return levelChecks.map((checked, currentItemIndex) => {
            if (currentItemIndex !== itemIndex) {
              return checked;
            }

            return !checked;
          });
        }),
      },
    }));
  };

  const handleNoteChange = (dimensionKey, levelIndex, value) => {
    setResponses((previous) => ({
      ...previous,
      [dimensionKey]: {
        ...previous[dimensionKey],
        notes: previous[dimensionKey].notes.map((note, currentLevelIndex) =>
          currentLevelIndex === levelIndex ? value : note
        ),
      },
    }));
  };

  const restartAssessment = () => {
    setPhase("assessment");
    setCurrentDimensionIndex(0);
    setResponses(createInitialResponses());
  };

  const chartSize = 430;
  const center = chartSize / 2;
  const radarRadius = 140;
  const radarShapePoints = radarPoints(DIMENSIONS, scores, center, center, radarRadius);

  return (
    <div className="app-shell min-h-screen text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="hero-card mb-8 rounded-[2rem] border border-white/70 bg-white/82 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                KTH Innovation IRL Self-Assessment
              </p>
              <h1 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Measure your readiness across customers, technology, business, IP, team, and funding.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Work through one dimension at a time. Your score only advances when every checkbox at each earlier
                level is complete.
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-[520px]">
              {DIMENSIONS.map((dimension) => {
                const dimensionScore = scores[dimension.key];
                const tone = getScoreTone(dimensionScore);
                const isActive = dimension.key === currentDimension.key && phase === "assessment";

                return (
                  <button
                    key={dimension.key}
                    type="button"
                    onClick={() => {
                      setPhase("assessment");
                      setCurrentDimensionIndex(
                        DIMENSIONS.findIndex((candidate) => candidate.key === dimension.key)
                      );
                    }}
                    className={`dimension-chip rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-blue-300 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white/90 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-lg">{dimension.emoji}</div>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-slate-900">{dimension.key}</span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tone.pill}`}>
                        {dimensionScore}/9
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {phase === "assessment" ? (
          <div className="app-grid mx-auto grid max-w-5xl gap-6">
            <aside className="panel panel-centered rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Progress</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Dimension {currentDimensionIndex + 1} of {DIMENSIONS.length}
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl">{currentDimension.emoji}</div>
                    <h2 className="mt-3 text-xl font-semibold text-slate-950">{currentDimension.key}</h2>
                    <p className="text-sm text-slate-600">{currentDimension.name}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 ${getScoreTone(currentScore).pill}`}>
                    {currentScore > 0 ? `Score ${currentScore}` : "Score 0"}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Highest fully completed level:{" "}
                  <span className="font-semibold text-slate-900">{currentScore > 0 ? `${currentDimension.key} ${currentScore}` : "Not yet at level 1"}</span>
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Checking later levels is useful for evidence capture, but only continuous completion from level 1 counts.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {DIMENSIONS.map((dimension, index) => {
                  const dimensionScore = scores[dimension.key];
                  const tone = getScoreTone(dimensionScore);

                  return (
                    <button
                      key={dimension.key}
                      type="button"
                      onClick={() => setCurrentDimensionIndex(index)}
                      className={`dimension-nav flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                        index === currentDimensionIndex
                          ? "border-blue-300 bg-blue-50"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg">{dimension.emoji}</span>
                        <span>
                          <span className="block text-sm font-semibold text-slate-900">{dimension.key}</span>
                          <span className="block text-xs text-slate-500">{dimension.name}</span>
                        </span>
                      </span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tone.pill}`}>
                        {dimensionScore}/9
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <section className="panel stage-panel rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] md:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Assessment</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    {currentDimension.emoji} {currentDimension.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Review each level and check the criteria that already apply to your project.
                  </p>
                </div>
                <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ring-1 ${getScoreTone(currentScore).pill}`}>
                  Live score: {currentScore}/9
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {currentDimension.levels.map((level, levelIndex) => {
                  const levelChecks = currentResponse.checks[levelIndex];
                  const note = currentResponse.notes[levelIndex];
                  const isComplete = levelChecks.every(Boolean);
                  const previousLevelsComplete =
                    levelIndex === 0 || currentResponse.checks.slice(0, levelIndex).every((checks) => checks.every(Boolean));
                  const state = getLevelState(currentScore, level.level, isComplete, previousLevelsComplete);

                  const levelStyles =
                    state === "complete"
                      ? "border-emerald-200 bg-emerald-50/70"
                      : state === "active"
                        ? "border-amber-200 bg-amber-50/70"
                        : "border-slate-200 bg-slate-50/70";

                  const badgeStyles =
                    state === "complete"
                      ? "bg-emerald-100 text-emerald-700"
                      : state === "active"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-200 text-slate-700";

                  return (
                    <div
                      key={level.level}
                      className={`level-card rounded-3xl border p-5 transition duration-300 hover:-translate-y-0.5 ${levelStyles}`}
                    >
                      <div className="flex flex-col gap-3 border-b border-white/70 pb-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${badgeStyles}`}>
                            {currentDimension.key} {level.level}
                          </span>
                          <h3 className="mt-3 text-lg font-semibold text-slate-950">{level.description}</h3>
                        </div>
                        <span className="text-xs font-medium text-slate-500">
                          {isComplete ? "All criteria checked" : `${levelChecks.filter(Boolean).length}/${level.items.length} checked`}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        {level.items.map((item, itemIndex) => {
                          const checked = levelChecks[itemIndex];
                          const checkboxId = `${currentDimension.key}-${level.level}-${itemIndex}`;

                          return (
                            <label
                              key={checkboxId}
                              htmlFor={checkboxId}
                              className={`flex cursor-pointer gap-3 rounded-2xl border px-4 py-3 transition duration-200 ${
                                checked
                                  ? "border-blue-300 bg-blue-50"
                                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <input
                                id={checkboxId}
                                type="checkbox"
                                checked={checked}
                                onChange={() => handleCheckToggle(currentDimension.key, levelIndex, itemIndex)}
                                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-sm leading-6 text-slate-700">{item}</span>
                            </label>
                          );
                        })}
                      </div>

                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Notes / evidence for this level
                        </label>
                        <textarea
                          value={note}
                          onChange={(event) => handleNoteChange(currentDimension.key, levelIndex, event.target.value)}
                          placeholder="Optional notes, links, names, dates, or evidence details..."
                          rows={3}
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="stepper-row mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentDimensionIndex((index) => Math.max(0, index - 1))}
                  disabled={currentDimensionIndex === 0}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  ← Back
                </button>

                {currentDimensionIndex < DIMENSIONS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentDimensionIndex((index) => Math.min(DIMENSIONS.length - 1, index + 1))
                    }
                    className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Next dimension →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPhase("results")}
                    className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    View results
                  </button>
                )}
              </div>
            </section>
          </div>
        ) : (
          <div className="mx-auto max-w-5xl space-y-6">
            <section className="panel results-panel rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] md:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 text-center">
                <div className="mx-auto max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Results</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    IRL readiness snapshot
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Scores reflect the highest level with uninterrupted evidence completion from level 1 upward.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => downloadOverviewReport({ scores })}
                    className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Download overview
                  </button>
                  <button
                    type="button"
                    onClick={restartAssessment}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Restart assessment
                  </button>
                </div>
              </div>

              <div className="table-shell mt-6 overflow-hidden rounded-3xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr className="text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        <th className="px-5 py-4">Dimension</th>
                        <th className="px-5 py-4">Score</th>
                        <th className="px-5 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {DIMENSIONS.map((dimension) => {
                        const score = scores[dimension.key];
                        const tone = getScoreTone(score);

                        return (
                          <tr key={dimension.key}>
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <span className="text-lg">{dimension.emoji}</span>
                                <div>
                                  <div className="font-semibold text-slate-900">{dimension.key}</div>
                                  <div className="text-sm text-slate-500">{dimension.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-sm font-semibold text-slate-900">{score}/9</td>
                            <td className="px-5 py-4">
                              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tone.pill}`}>
                                {tone.label}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
                <div className="panel notes-panel rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Evidence notes</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {DIMENSIONS.map((dimension) => {
                      const notes = responses[dimension.key].notes
                        .map((note, index) => ({
                          level: index + 1,
                          note: note.trim(),
                        }))
                        .filter((entry) => entry.note);

                      return (
                        <div key={dimension.key} className="note-card rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="font-semibold text-slate-900">
                              {dimension.emoji} {dimension.key}
                            </h4>
                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
                                getScoreTone(scores[dimension.key]).pill
                              }`}
                            >
                              {scores[dimension.key]}/9
                            </span>
                          </div>

                          {notes.length > 0 ? (
                            <div className="mt-3 space-y-3">
                              {notes.map((entry) => (
                                <div key={`${dimension.key}-${entry.level}`} className="rounded-2xl bg-slate-50 px-3 py-2">
                                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                    {dimension.key} {entry.level}
                                  </p>
                                  <p className="mt-1 text-sm leading-6 text-slate-700">{entry.note}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="mt-3 text-sm leading-6 text-slate-500">No notes added for this dimension.</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="panel radar-panel rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Radar diagram</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Six axes, scored from 0 to 9 based on fully completed checklist levels.
                  </p>

                  <div className="mt-4 flex justify-center">
                    <svg viewBox={`0 0 ${chartSize} ${chartSize}`} className="h-[360px] w-full max-w-[420px]">
                      {[3, 6, 9].map((ring) => {
                        const ringRadius = (ring / 9) * radarRadius;

                        return (
                          <g key={ring}>
                            <polygon
                              points={polygonPoints(center, center, ringRadius, DIMENSIONS.length)}
                              fill="none"
                              stroke="#cbd5e1"
                              strokeWidth="1.2"
                            />
                            <text
                              x={center + 6}
                              y={center - ringRadius + 14}
                              fontSize="11"
                              fill="#64748b"
                            >
                              {ring}
                            </text>
                          </g>
                        );
                      })}

                      {DIMENSIONS.map((dimension, index) => {
                        const angle = -Math.PI / 2 + (index * Math.PI * 2) / DIMENSIONS.length;
                        const axisX = center + Math.cos(angle) * radarRadius;
                        const axisY = center + Math.sin(angle) * radarRadius;
                        const labelX = center + Math.cos(angle) * (radarRadius + 38);
                        const labelY = center + Math.sin(angle) * (radarRadius + 38);
                        const anchor =
                          Math.abs(Math.cos(angle)) < 0.2 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";

                        return (
                          <g key={dimension.key}>
                            <line
                              x1={center}
                              y1={center}
                              x2={axisX}
                              y2={axisY}
                              stroke="#cbd5e1"
                              strokeWidth="1.2"
                            />
                            <circle
                              cx={center + Math.cos(angle) * ((scores[dimension.key] / 9) * radarRadius)}
                              cy={center + Math.sin(angle) * ((scores[dimension.key] / 9) * radarRadius)}
                              r="4"
                              fill="#2563eb"
                            />
                            <text
                              x={labelX}
                              y={labelY}
                              textAnchor={anchor}
                              fontSize="12"
                              fill="#0f172a"
                              fontWeight="600"
                            >
                              {dimension.key} {scores[dimension.key]}
                            </text>
                          </g>
                        );
                      })}

                      <polygon points={radarShapePoints} fill="rgba(37, 99, 235, 0.22)" stroke="#2563eb" strokeWidth="2.5" />
                      <circle cx={center} cy={center} r="4" fill="#0f172a" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            <section className="panel gaps-panel rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] md:p-8">
              <h3 className="text-lg font-semibold text-slate-950">Key gaps</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {lowestDimensions.map((dimension) => (
                  <div
                    key={dimension.key}
                    className={`gap-card rounded-3xl border bg-white p-5 ${getScoreTone(scores[dimension.key]).border}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {dimension.emoji} {dimension.key}
                        </p>
                        <p className="text-sm text-slate-500">{dimension.name}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 ${
                          getScoreTone(scores[dimension.key]).pill
                        }`}
                      >
                        {scores[dimension.key]}/9
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-700">{dimension.recommendation}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
