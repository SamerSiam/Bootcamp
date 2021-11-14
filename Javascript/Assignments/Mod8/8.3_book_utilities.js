const Book1={
    name: "the stranger in a life boat",
    author:"Mitch Albom",
    year:"2021"

};
const Book2={
    name: "Learning JavaScript",
    author:"Pinni",
    year:"2020"

};

const bookUtils={

    getFirstPublished: function(bk1,bk2)
    {
        return bk1.year> bk2.year? bk1:bk2;
    },

    setNewEdition: function (bk, edYr)
    {
        bk['latestEdition']=edYr;
    },

    setLanguage: function (bk,lang)
    {
        bk['language']=lang;
    },

    setTranslation: function (bk,lang,trltr)
    {
        bk['translation']={language:lang,translator:trltr };
    },

    setPublisher: function (bk,name,loc)
    {
        bk['publisher']={PublisherName:name, location:loc};
    },
    isSamePublisher: function (bk1,bk2)
    {
        return bk1.publisher.PublisherName===bk2.publisher.PublisherName? 'Same Publisher': 'Different Publishers';
    },
};


// console.log(bookUtils.getFirstPublished(Book1,Book2));
// bookUtils.setNewEdition(Book1,2022);
// bookUtils.setLanguage(Book1,'Hindi');
// bookUtils.setTranslation(Book1,'Arabic','samer');
// bookUtils.setPublisher(Book1,'john','columbus');
// bookUtils.setPublisher(Book2,'Mary','cleveland');
// console.log (bookUtils.isSamePublisher(Book1,Book2));
