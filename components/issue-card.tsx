import { MouseEventHandler } from "react";
import { JackInTheBox } from "react-awesome-reveal";

export const IssueCard = ({
    title,
    Icon,
    summary,
    customClickEvent,
}: {
    title: string;
    Icon: () => JSX.Element;
    summary: string;
    customClickEvent: MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <div
            onClick={customClickEvent}
            className="after:w-[350px] after:h-[400px] after:bg-[#182f2a] text-[#b1c8c3] after:blur-[2px] after:rounded-2xl flex items-center justify-center relative shadow-2xl rounded-2xl max-[400px]:after:w-[300px] cursor-pointer"
        >
            <div className="absolute w-[350px] h-[400px] rounded-2xl flex flex-col items-center gap-[15px] z-[1] overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-10 max-[400px]:w-[300px]">
                <div className="w-full h-[150px] flex items-center justify-center">
                    <Icon />
                </div>

                <div className="w-full px-[30px] text-3xl font-bold max-[400px]:px-4 select-none">
                    {title}
                </div>

                <div className="w-full px-[30px] leading-tight max-[400px]:px-4 select-none">
                    {summary} <span className="underline">More</span>
                </div>
            </div>
        </div>
    );
};

export const CardDetail = ({
    title,
    iframesrc,
    description,
}: {
    title: string;
    iframesrc: string;
    description: string;
}) => {
    return (
        <JackInTheBox
            triggerOnce
            className="w-full mt-[456px] h-[410px] absolute left-0 bg-white bg-opacity-75 rounded-2xl shadow-2xl max-[1060px]:h-[720px] max-[450px]:ml-[-14px] max-[450px]:w-[110%]"
        >
            <div className="w-full h-full flex items-start justify-center p-5 gap-7 max-[1060px]:flex-col max-[450px]:p-3">
                <div className="w-full h-full flex flex-col gap-5 max-[1060px]:h-fit">
                    <div className="text-3xl font-semibold select-none">
                        {title}
                    </div>
                    <div className="text-lg font-medium max-[750px]:h-[280px] max-[750px]:text-ellipsis max-[750px]:overflow-hidden select-none">
                        {description}
                    </div>
                </div>

                <div className="w-full h-full rounded-lg overflow-visible max-[450px]:h-[400px]">
                    <iframe
                        src={iframesrc}
                        loading="eager"
                        className="w-full h-full border-none bg-[#b1c8c3] rounded-lg"
                    ></iframe>
                </div>
            </div>
        </JackInTheBox>
    );
};
