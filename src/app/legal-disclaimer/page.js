import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import LegalHome from "./LegalHome";
import LegalDisclaimerSection from "./LegalDisclaimerSection";
// import TermsAndCondition from "./TermsAndCondition";

export default function LegalDisclaimer() {
    return (
        <>
            <LegalHome />
            <LegalDisclaimerSection />
            <BuildScaleHero />

            <ScaleWithConfidence />
        </>
    );
}
