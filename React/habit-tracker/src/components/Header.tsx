import Button from "./Button";

export default function Header(){
    return(
        <div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-2xl">Habit Tracker</h1>
                <span className="text-zinc-400 text-sm">1 / 1 done today</span>
                </div>

                <div className="flex flex-col gap-1 items-end">
                    <span className="text-zinc-400 text-sm">Apr 6 - Apr 12</span>
                    <div className="flex flex-center gap-3">
                    <Button></Button>
                    <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}