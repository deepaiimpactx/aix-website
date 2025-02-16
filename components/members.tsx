import Image from "next/image";
import Link from "next/link";
import sanketmishra from "@/public/images/sanket-mishra.jpeg";
import rajkanwarsingh from "@/public/images/rajkanwar-singh.png";
import aravindan from "@/public/images/aravindan-v.jpeg";

const membersData = [
    {
        name: "Sanket Mishra",
        avatar: sanketmishra,
        title: "Lead Researcher, DeepAI ImpactX",
        subtitle: "Associate Professor, MAHE Blr",
        papers: [
            { title: "LIRAD: Lightweight Tree-Based Approaches", link: "#" },
        ],
        linkedin: "https://www.linkedin.com/in/sanketmishra1/",
    },
    {
        name: "Rajkanwar Singh",
        avatar: rajkanwarsingh,
        title: "Big Data Researcher, DeepAI ImpactX",
        subtitle: "Data Science Intern, Neuralix.ai",
        papers: [
            { title: "Streamlined Data Pipeline for Real-Time Threat Detection and Model Inference", link: "#" },
        ],
        linkedin: "https://www.linkedin.com/in/rajkanwars15/",
    },
    {
        name: "Aravindan V.",
        avatar: aravindan,
        title: "Machine & Deep Learning Researcher, DeepAI ImpactX",
        subtitle: "",
        papers: [
            { title: "AURA: Adaptive Unified Real-Time Analytics for IoT Intrusion Detection", link: "#" },
        ],
        linkedin: "https://www.linkedin.com/in/aravindan-v12/",
    },
];

export default function Members() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="mx-auto max-w-3xl text-center pb-8">
                    <h2
                        className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] animate-[gradient_6s_linear_infinite] bg-[length:200%_auto]"
                        data-aos="fade-up"
                    >
                        Meet Our Members
                    </h2>
                    <p className="text-gray-400 mt-3" data-aos="fade-up" data-aos-delay="200">
                        Our core team of AI researchers and innovators
                    </p>
                </div>

                <div
                    className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {membersData.map((member, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg bg-gray-800/60 p-6 text-center transition-shadow hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 h-32 w-32 relative">
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-200">{member.name}</h3>
                            <p className="text-sm text-gray-400 mb-1">{member.title}</p>
                            <p className="text-xs text-gray-500 mb-2">{member.subtitle}</p>
                            <ul className="text-sm text-gray-300 mb-4">
                                {member.papers.map((paper, i) => (
                                    <li key={i} className="mb-1">
                                        <Link
                                            href={paper.link}
                                            target="_blank"
                                            className="text-indigo-400 hover:text-indigo-300 hover:underline"
                                        >
                                            {paper.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={member.linkedin}
                                target="_blank"
                                className="btn bg-indigo-600 text-white hover:bg-indigo-700 inline-flex items-center"
                            >
                                LinkedIn
                                <span className="ml-1 text-white/70">-&gt;</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
