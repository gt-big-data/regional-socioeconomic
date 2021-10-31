#import the get_basic_image file as an easier to read name 
#no need to import serpapi since it is imported in the get_basic_image file
import get_basic_images as gbi
#An array of all queries that need to be run 
#This is a google search query so search syntax can be used link below for examples
#https://support.google.com/websearch/answer/2466433?hl=en
queries = ["Villages", "Roads", "Cities", "Rivers"]
#Loop through the queries array and run the query, save response arrray to results
#Use results to extract image links and download_image_from_url to download 
for query in queries:
    results = gbi.search_request(query)
    links = gbi.get_image_links_from_response(results)
    for link in links:
        #save the images to images directory and in seperated folders by query
        gbi.download_image_from_url(link, "images2/" + query + "/" + query + str(links.index(link)) + ".png")