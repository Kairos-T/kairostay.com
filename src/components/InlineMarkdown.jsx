import React from "react";
import "./InlineMarkdown.scss";

const PATTERNS = [
    {
        regex: /\[([^\]]+)\]\(([^)]+)\)/,
        render: (match, key, parse) => (
            <a
                key={key}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="md-link"
            >
                {parse(match[1])}
            </a>
        ),
    },
    {
        regex: /\*\*([^*]+)\*\*/,
        render: (match, key, parse) => <strong key={key}>{parse(match[1])}</strong>,
    },
    {
        regex: /__([^_]+)__/,
        render: (match, key, parse) => <u key={key}>{parse(match[1])}</u>,
    },
    {
        regex: /==([^=]+)==/,
        render: (match, key, parse) => (
            <mark key={key} className="md-mark">
                {parse(match[1])}
            </mark>
        ),
    },
    {
        regex: /`([^`]+)`/,
        render: (match, key) => (
            <code key={key} className="md-code">
                {match[1]}
            </code>
        ),
    },
];

const parseInline = (text, keyPrefix = "k") => {
    let earliest = null;
    for (const pattern of PATTERNS) {
        const match = pattern.regex.exec(text);
        if (match && (earliest === null || match.index < earliest.match.index)) {
            earliest = {pattern, match};
        }
    }
    if (!earliest) {
        return text ? [text] : [];
    }

    const {pattern, match} = earliest;
    const before = text.slice(0, match.index);
    const after = text.slice(match.index + match[0].length);
    const key = `${keyPrefix}-${match.index}`;

    return [
        ...(before ? [before] : []),
        pattern.render(match, key, (inner) => parseInline(inner, `${key}n`)),
        ...parseInline(after, `${key}a`),
    ];
};

const InlineMarkdown = ({text}) => <>{parseInline(text)}</>;

export default InlineMarkdown;
