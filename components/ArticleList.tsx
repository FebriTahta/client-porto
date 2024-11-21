import CardArticle from "./custom/CardArticle";

const ArticleList = () => {
  return (
    <div>
      <section className="bg-transparent overflow-y-auto max-h-[620px] scrollbar-hide">
        <div className="py-8 mx-auto max-w-screen-xl lg:py-4">
          <div className="grid gap-8 lg:grid-cols-1">
            <CardArticle />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleList;
