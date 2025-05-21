'use client'

import Link from "next/link";



const ContentPriview = (content) => {
    const blo = content?.content
    

    const truncateText = (html, maxLength = 160) => {
        if (!html) return '';

        // Remove HTML tags
        const plainText = html.replace(/<[^>]*>/g, '');

        // Truncate to max length
        return plainText.length > maxLength
            ? plainText.substring(0, maxLength) + '...'
            : plainText;
    };

    // Check if content needs truncation
    const needsTruncation = (html, maxLength = 160) => {
        if (!html) return false;
        const plainText = html.replace(/<[^>]*>/g, '');
        return plainText.length > maxLength;
    };


    return (
        <div>
            <div className="space-y-2">
                <p className="text-slate-400 text-start">
                    {truncateText(blo?.content)}
                </p>

                {needsTruncation(blo?.content) && (
                    <Link href='' legacyBehavior>
                        <a className="text-blue-500 hover:underline text-sm">
                            See More
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ContentPriview;