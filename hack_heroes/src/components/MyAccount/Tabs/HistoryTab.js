import SectionElement from "../../MainSection/SectionElement/SectionElement"
import MainSection from "../../MainSection/MainSection";

export default function HistoryTab ({orders}) {
    return(
        <div className="w-2/5">
            {JSON.stringify(orders)}
        </div>
    )
}
