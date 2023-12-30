import {
    Caravan,
    CookingPot,
    Fence,
    LandPlot,
    Leaf,
    ParkingCircleOff,
    Sprout,
    Sun,
    Tractor,
} from "lucide-react";

export const IssueListing = {
    individual: [
        {
            id: 0,
            title: "Dietary Choices",
            icon: () => (
                <CookingPot width={120} height={120} strokeWidth={0.8} />
            ),
            summary:
                "Reduce meat and dairy consumption, opt for local and organic produce, and compost food scraps to enrich soil.",
            iframesrc:
                "https://ourworldindata.org/grapher/cost-healthy-diet-share-food-expenditure",
            description:
                "Reduce Meat and Dairy: Opt for plant-based meals more often, choosing protein sources like legumes, lentils, and nuts. This reduces methane emissions from livestock and the strain on land used for animal feed production.\nLocal and Organic Produce: Prioritize locally grown and organic fruits and vegetables to support sustainable farming practices, reduce food miles (reducing transportation emissions), and benefit from fresher, more nutritious food.\nComposting Food Scraps: Instead of sending food waste to landfills, compost it to create nutrient-rich fertilizer for gardens and reduce methane emissions.",
        },
        {
            id: 1,
            title: "Travel & Consumption",
            icon: () => <Caravan width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Minimize reliance on cars, prioritize eco-friendly products, and avoid unsustainable tourism practices.",
            iframesrc:
                "https://ourworldindata.org/grapher/co2-emissions-domestic-aviation",
            description:
                "Minimize Reliance on Cars: Walk, bike, or use public transportation whenever possible. Carpooling and electric vehicles can also be considered.\nEco-Friendly Products: Choose products with minimal packaging, made from recycled materials, or with ethical and sustainable sourcing practices. Prioritize reusable items over disposable ones.\nSustainable Tourism: When traveling, choose eco-friendly destinations, support local businesses, and minimize your environmental impact. Avoid contributing to unsustainable practices like littering or wildlife exploitation.",
        },
        {
            id: 2,
            title: "Community Gardening",
            icon: () => <Fence width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Participate in or start community gardens to promote local food production and provide habitat for pollinators.",
            iframesrc:
                "https://ourworldindata.org/grapher/food-emissions-production-supply-chain",
            description:
                "Participate in Existing Gardens: Join community gardens to grow your own food, connect with your community, and learn about sustainable gardening practices.\nStart Your Own Garden: Even a small balcony or patio can be used to grow herbs, vegetables, or pollinator-friendly plants. This promotes local food production, biodiversity, and community engagement.",
        },
    ],
    agriculture: [
        {
            id: 0,
            title: "Conservation Agriculture",
            icon: () => <Tractor width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Implement practices like no-till farming, cover cropping, and crop rotation to improve soil health and reduce erosion.",
            iframesrc:
                "https://ourworldindata.org/grapher/land-use-agriculture-longterm",
            description:
                "No-Till Farming: Avoid disturbing the soil to improve soil health, reduce erosion, and increase carbon sequestration.\nCover Cropping: Plant cover crops between cash crops to suppress weeds, improve soil fertility, and provide habitat for beneficial insects.\nCrop Rotation: Rotate different types of crops on the same land to reduce reliance on pesticides and prevent nutrient depletion.",
        },
        {
            id: 1,
            title: "Agroforestry",
            icon: () => <Sprout width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Integrate trees and crops on farmland to provide diverse habitats, enhance nutrient cycling, and offer additional income for farmers.",
            iframesrc:
                "https://ourworldindata.org/grapher/organic-agricultural-area",
            description:
                "Integrate Trees: Plant trees and shrubs on agricultural land to provide shade, wind protection, and habitat for pollinators and birds. Trees also fix nitrogen in the soil, improving its fertility.\nMulti-Story Cropping: Utilize vertical space by interplanting tall trees with lower-growing crops to maximize land use and biodiversity.",
        },
        {
            id: 2,
            title: "Sustainable Livestock Management",
            icon: () => <Leaf width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Use rotational grazing practices and avoid overgrazing to prevent soil degradation and maintain healthy grasslands.",
            iframesrc: "https://ourworldindata.org/grapher/global-pasture",
            description:
                "Rotational Grazing: Move livestock regularly to new pastures to prevent overgrazing and maintain healthy grasslands. This also improves manure distribution and soil fertility.\nSilvopasture: Integrate trees into pastures to provide shade, improve forage quality, and reduce reliance on feed supplements.",
        },
    ],
    policy: [
        {
            id: 0,
            title: "Protected Areas",
            icon: () => (
                <ParkingCircleOff width={120} height={120} strokeWidth={0.8} />
            ),
            summary:
                "Expand and effectively manage protected areas to preserve biodiversity and ecological functions.",
            iframesrc:
                "https://ourworldindata.org/grapher/proportion-of-forest-area-within-legally-established-protected-areas",
            description:
                "Expand and Manage Reserves: Establish and effectively manage protected areas to conserve biodiversity, provide wildlife corridors, and offer research and educational opportunities.\nCommunity Involvement: Integrate local communities in protected area management to ensure their cultural and sustainable use of resources.",
        },
        {
            id: 1,
            title: "Land-Use Planning",
            icon: () => <LandPlot width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Implement sustainable land-use planning policies to prevent deforestation, reduce urban sprawl, and protect sensitive ecosystems.",
            iframesrc: "https://ourworldindata.org/grapher/land-use",
            description:
                "Smart Zoning: Implement zoning regulations that protect sensitive ecosystems, promote urban green spaces, and discourage sprawl.\nTransportation Infrastructure: Design transportation systems that minimize fragmentation of habitats and ensure the safe passage of wildlife.",
        },
        {
            id: 2,
            title: "Invest in Green Technology",
            icon: () => <Sun width={120} height={120} strokeWidth={0.8} />,
            summary:
                "Support research and development of technologies that can help restore degraded lands and promote sustainable resource management.",
            iframesrc:
                "https://ourworldindata.org/grapher/installed-global-renewable-energy-capacity-by-technology",
            description:
                "Renewable Energy: Support research and development of renewable energy sources like solar, wind, and geothermal to reduce reliance on fossil fuels and mitigate climate change.\nSustainable Agriculture Technologies: Invest in technologies like precision agriculture and biofertilizers to improve agricultural efficiency and reduce environmental impact.",
        },
    ],
};
