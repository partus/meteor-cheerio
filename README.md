meteor-cheerio
==============

Cheerio packaged for meteor. For cropping content of website. Jquery like sytax.

### Sample usage 
    ...
		result = HTTP.get "http://some.url"
		throw "can't get shops" unless result.statusCode == 200
		# prt result.content
		$ = Meteor.$.load result.content,
			ignoreWhitespace: true
		# prt $
		$.root().children().each (i, elem)->
			shop = {}
			prt "shop number", i
			ch = $(elem).children()
			shop = 
			   src: 		ch.filter("a").attr("href")
			   name:  		ch.find("h3").text()
			   spec:		ch.find(".specialization").text()
			   categories:	ch.find(".categories").text()
			   logo:		ch.filter(".logo_preview").find("img").attr("data-load")
			   minPrice: 	parseInt ch.find(".min_sum").text()
			   avarageTime: parseInt ch.find(".time").text()
		Shops.insert(shop)
		...
		
### Visit https://github.com/MatthewMueller/cheerio for more help  
