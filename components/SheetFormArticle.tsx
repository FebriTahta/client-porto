
// KHUSUS UNTUK LOGIC
import ArticleForm from "./form/ArticleForm"

const SheetFormArticle = ( {closeSheet} : {closeSheet: () => void} ) => {


    

    return (
        <ArticleForm
            form={form}
            error={error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            closeSheet={closeSheet}
        />
    )
}

export default SheetFormArticle