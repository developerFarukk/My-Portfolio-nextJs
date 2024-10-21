
"use client";

import { Button } from "../ui/moving-border";



const MobingBorderButton = () => {
    return (
        <div>
            <div className="p-2">
                <Button
                    borderRadius="1.75rem"
                    className="bg-gradient-to-r from-slate-800 to-[#000428] "
                >
                    About Me
                </Button>
            </div>
        </div>
    );
};

export default MobingBorderButton;