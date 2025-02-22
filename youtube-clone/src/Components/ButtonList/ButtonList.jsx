import { List } from "../../Config/Config";
import { Button } from "../../UI/index";

const ButtonList = () => {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-2 p-2 w-max">
                {List.map((item, index) => (
                    <Button
                        key={index}
                        className="border border-gray-700 min-w-[90px] rounded-md bg-gray-800 text-sm"
                    >
                        {item}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default ButtonList;
