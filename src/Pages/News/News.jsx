import { useState } from "react";
import Banner from "./Banner";
import Press from "./Press";
import Subscribe from "./Subscribe";
// import ReadScreen from "./ReadScreen";
import NigeriaCreditPlan from "./NigeriaCreditPlan";
import DigitalLoansNigeria from "./DigitalLoanNigeria";
import GenZMoney from "./GenZMoney";
import FinancialInclusionNigeria from "./FinancialInclusionNigeria";
import BarriersToFinancialInclusion from "./BarriersToFinancialInclusion";
import AccessToCreditNigeria from "./AccessToCreditNigeria";
import EvolutionOfInformalCredit from "./EvolutionOfInformalCredit";

const News = () => {
  const [isRead, setIsRead] = useState("0");
  return (
    <div>
      <Banner />
      {isRead == "1" ? (
        // <ReadScreen setIsRead={setIsRead} />
        <NigeriaCreditPlan setIsRead={setIsRead} />
      ) : isRead == "2" ? (
        <DigitalLoansNigeria setIsRead={setIsRead} />
      ) : isRead == "3" ? (
        <GenZMoney setIsRead={setIsRead} />
      ) : isRead == "4" ? (
        <FinancialInclusionNigeria setIsRead={setIsRead} />
      ) : isRead == "5" ? (
        <BarriersToFinancialInclusion setIsRead={setIsRead} />
      ) : isRead == "6" ? (
        <AccessToCreditNigeria setIsRead={setIsRead} />
      ) : isRead == "7" ? (
        <EvolutionOfInformalCredit setIsRead={setIsRead} />
      ) : isRead == "0" ? (
        <Press setIsRead={setIsRead} />
      ) : null}
      <Subscribe />
    </div>
  );
};

export default News;
