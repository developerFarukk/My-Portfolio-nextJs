"use client"

import { TextGenerateEffect } from "../ui/text-generate-effect";


const TextEffect = ( {words} ) => {
    return (
        <div>
            <TextGenerateEffect words={words} className="ml-1" />
        </div>
    );
};

export default TextEffect;