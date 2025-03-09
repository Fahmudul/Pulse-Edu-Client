"use client";
import { getNews } from "@/Services/News";
import CommonBanner from "@/components/CommonBanner";
import NewsCard from "@/components/News/NewsCard";
import NewsCardSkeleton from "@/components/News/NewsCardSkeleton";
import { INews } from "@/types/global";
import React, { useEffect, useState } from "react";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = React.useState<INews[]>();
  useEffect(() => {
    const getNewsArticle = async () => {
      const news = await getNews();
      setNews(news?.articles as INews[]);
      setLoading(false);
    };
    getNewsArticle();
  }, []);

  console.log("from news", news);
  return (
    <div>
      <CommonBanner title="News" subTitle="News" />

      <div className="w-[82.5%] mx-auto my-10">
        <h1 className="text-4xl font-semibold mb-10 text-primary text-center">
          Latest news
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {loading ? (
            <>
              <NewsCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
            </>
          ) : (
            news?.map((article: INews, idx: number) => (
              <NewsCard key={idx} article={article} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
