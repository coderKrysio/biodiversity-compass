"use client";
import { Sprout } from "lucide-react";
import { AttentionSeeker, Bounce, Fade } from "react-awesome-reveal";
import { CardDetail, IssueCard } from "./issue-card";
import { useReducer } from "react";
import { IssueListing } from "@/lib/data";

enum IndexActionKind {
    SHOWCD = "showCardDetails",
}

interface IndexAction {
    type: IndexActionKind;
    setIndex: number;
    setCategory: string;
}

interface IndexState {
    currentId: number;
    showDetails: boolean;
    category: string;
}

const reducer = (
    state: IndexState,
    { type, setIndex, setCategory }: IndexAction
) => {
    switch (type) {
        case IndexActionKind.SHOWCD:
            return {
                currentId: setIndex,
                showDetails: !state.showDetails,
                category: setCategory,
            };
        default:
            return state;
    }
};

export const ListingIssues = () => {
    const { individual, agriculture, policy } = IssueListing;
    const [state, dispatch] = useReducer(reducer, {
        currentId: -1,
        showDetails: false,
        category: "none",
    });
    const ar = [1, 2, 3];
    return (
        <section className="w-full min-h-screen p-6 mt-[70px] flex flex-col items-items justify-center gap-[50px] max-[400px]:p-2">
            <div className="w-full relative text-5xl font-medium leading-relaxed flex items-center justify-end max-[590px]:leading-loose max-[590px]:pr-4">
                <div className="absolute left-0 bottom-[-60px] max-[810px]:hidden">
                    <Sprout width={150} height={150} strokeWidth={0.8} />
                </div>

                <div className="text-right w-full flex flex-col items-end justify-end">
                    <Bounce cascade damping={0.15} className="w-fit">
                        <p>Reimagining the Urban spaces</p>
                        <p>
                            <span className="font-semibold bg-[#2a534a] text-white rounded-full px-4 py-1">
                                Greening
                            </span>{" "}
                            the world
                        </p>
                    </Bounce>
                </div>
            </div>

            <div className="w-full h-[250px] shadow-lg shadow-[#182f2a] flex items-center justify-center rounded-3xl overflow-hidden">
                <img
                    src="/images/issues-listingimg2.jpg"
                    className="w-1/2 mx-auto max-[950px]:w-full max-[520px]:w-auto max-[520px]:h-full max-[520px]:bg-center"
                />
                <img
                    src="/images/issues-listingimg1.jpg"
                    className="w-1/2 mx-auto max-[950px]:w-full max-[520px]:w-auto max-[520px]:h-full max-[520px]:bg-center"
                />
            </div>

            <div className="bg-red-500 issue--listing">
                <div className="p-4 px-7 max-[400px]:p-2">
                    <AttentionSeeker
                        effect="flash"
                        damping={0.05}
                        cascade
                        className="text-4xl font-semibold tracking-wide text-white"
                    >
                        Individual Level
                    </AttentionSeeker>
                    <div className="flex flex-wrap justify-center items-start gap-[120px] my-9 relative">
                        {individual.map(
                            (
                                {
                                    title,
                                    icon,
                                    summary,
                                    iframesrc,
                                    description,
                                },
                                index
                            ) => (
                                <div
                                    key={index}
                                    className={`flex items-start ${
                                        state.showDetails &&
                                        state.currentId == index &&
                                        state.category == "individual" &&
                                        "h-[846px] max-[1060px]:h-[1156px]"
                                    }`}
                                >
                                    <Fade>
                                        <IssueCard
                                            title={title}
                                            Icon={icon}
                                            summary={summary}
                                            customClickEvent={() => {
                                                dispatch({
                                                    type: IndexActionKind.SHOWCD,
                                                    setIndex: index,
                                                    setCategory: "individual",
                                                });
                                            }}
                                        />
                                    </Fade>
                                    {state.showDetails &&
                                        state.currentId == index &&
                                        state.category == "individual" && (
                                            <CardDetail
                                                title={title}
                                                iframesrc={iframesrc}
                                                description={description}
                                            />
                                        )}{" "}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="p-4 px-7">
                    <AttentionSeeker
                        effect="flash"
                        damping={0.05}
                        cascade
                        className="text-4xl font-semibold tracking-wide text-white"
                    >
                        Agricultural Level
                    </AttentionSeeker>
                    <div className="flex flex-wrap justify-center items-start gap-[120px] my-9 relative">
                        {agriculture.map(
                            (
                                {
                                    title,
                                    icon,
                                    summary,
                                    iframesrc,
                                    description,
                                },
                                index
                            ) => (
                                <div
                                    key={index}
                                    className={`flex items-start ${
                                        state.showDetails &&
                                        state.currentId == index &&
                                        state.category == "agriculture" &&
                                        "h-[846px] max-[1060px]:h-[1156px]"
                                    }`}
                                >
                                    <Fade>
                                        <IssueCard
                                            title={title}
                                            Icon={icon}
                                            summary={summary}
                                            customClickEvent={() => {
                                                dispatch({
                                                    type: IndexActionKind.SHOWCD,
                                                    setIndex: index,
                                                    setCategory: "agriculture",
                                                });
                                            }}
                                        />
                                    </Fade>
                                    {state.showDetails &&
                                        state.currentId == index &&
                                        state.category == "agriculture" && (
                                            <CardDetail
                                                title={title}
                                                iframesrc={iframesrc}
                                                description={description}
                                            />
                                        )}{" "}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="p-4 px-7">
                    <AttentionSeeker
                        effect="flash"
                        damping={0.05}
                        cascade
                        className="text-4xl font-semibold tracking-wide text-white"
                    >
                        Policy & Governance Level
                    </AttentionSeeker>
                    <div className="flex flex-wrap justify-center items-start gap-[120px] my-9 relative">
                        {policy.map(
                            (
                                {
                                    title,
                                    icon,
                                    summary,
                                    iframesrc,
                                    description,
                                },
                                index
                            ) => (
                                <div
                                    key={index}
                                    className={`flex items-start ${
                                        state.showDetails &&
                                        state.currentId == index &&
                                        state.category == "policy" &&
                                        "h-[846px] max-[1060px]:h-[1156px]"
                                    }`}
                                >
                                    <Fade>
                                        <IssueCard
                                            title={title}
                                            Icon={icon}
                                            summary={summary}
                                            customClickEvent={() => {
                                                dispatch({
                                                    type: IndexActionKind.SHOWCD,
                                                    setIndex: index,
                                                    setCategory: "policy",
                                                });
                                            }}
                                        />
                                    </Fade>
                                    {state.showDetails &&
                                        state.currentId == index &&
                                        state.category == "policy" && (
                                            <CardDetail
                                                title={title}
                                                iframesrc={iframesrc}
                                                description={description}
                                            />
                                        )}{" "}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
