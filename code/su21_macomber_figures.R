figures<-read.csv("figures.csv", sep = ",", na.strings = c("[]"))
table(figures$categories)
table(figures$entry_id)
x<-c(34,82, 4, 1, 2, 3, 2, 6, 8, 1, 1, 3, 14, 3, 1, 2, 1)
labels<-c("Arms and Armor", "Casting", "Tool", "Wax Process", "Corrosives",
          "Cultivation", "Glass Process", "Household and Daily Life",
          "Tricks and Sleight of Hand", "Manuscript Structure", "Medicine",
          "Painting", "Preserving", "Decorative", "Stones", "Varnish")
piepercent<- round(100*x/sum(x), 1)
pie(x, labels = piepercent, main = "Percent of Figures in Each Category",col = rainbow(length(x)))
legend("topright", c("Arms and Armor", "Casting", "Tool", "Wax Process", "Corrosives",
                     "Cultivation", "Glass Process", "Household and Daily Life",
                     "Tricks and Sleight of Hand", "Manuscript Structure", "Medicine",
                     "Painting", "Preserving", "Decorative", "Stones", "Varnish"), cex = 0.8,
       fill = rainbow(length(x)))

install.packages("ggplot2")
library("ggplot2")
ggplot(data=figures, aes(x=categories, fill=categories))+ geom_bar(stat="count", width=0.7) +
    labs(title="Distribution of Figures in Ms. Fr. 640", x="Category", y="Number of Figures in Manuscript")+
  scale_fill_discrete(name = "Category", labels = c("Arms and Armor", "Casting, Tool", "Casting, Wax Process",
                                                      "Casting", "Corrosives", "Cultivation", "Glass Process",
                                                      "Household and Daily Life, Tricks and Sleight of Hand",
                                                      "Household and Daily Life", "Manuscript Structure", "Medicine",
                                                      "Metal Process", "Painting", "Preserving, Decorative", "Preserving",
                                                      "Stones", "Tool, Household and Daily Life", "Tool", "Tricks and Sleight of Hand",
                                                      "Varnish")) +
  theme(axis.text.x=element_blank( ))

table(figures$margin)
table(figures$size)
