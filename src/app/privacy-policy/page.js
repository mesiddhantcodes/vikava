import BuildScaleHero from "../vikava/component/BuildScaleHero";
import ScaleWithConfidence from "../vikava/component/ScaleWithConfidence";
import HomePrivacy from "./HomePrivacy";
import PrivacyPolicySection from "./PrivacyPolicySection";

export default function PrivacyPolicy() {
    return (
        <>
            <HomePrivacy />
            <PrivacyPolicySection />
            {/* <CareersManifestoSection /> */}
            {/* <HowToInterest /> */}
            {/* <CommunityInviteSection /> */}
            <BuildScaleHero />

            <ScaleWithConfidence />
        </>
    );
}
