import React from 'react'
import ExecutionInfrastructureVsStrategyBlogsCopy from './ExecutionInfrastructureVsStrategyBlogsCopy'
import ExecutionInfrastructureVsStrategyFounderQuote from './ExecutionInfrastructureVsStrategyFounderQuote'
import ContinueReading from '../ContinueReading'

export const metadata = {
    title: "Why Execution Infrastructure Beats Strategy for Growth | Vikava Labs",
    description: "Most businesses don’t fail due to lack of ideas or strategy. They fail due to broken execution infrastructure. This founder-led insight explains why systems, accountability, and integration matter more than plans.",
};

const page = () => {
    return (
        <>
            <ExecutionInfrastructureVsStrategyBlogsCopy />
            <ExecutionInfrastructureVsStrategyFounderQuote />
            {/* <ContinueReading /> */}
        </>)
}

export default page