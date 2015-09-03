$(document).ready(function(){

	$('#driving-time').change(function(){
			var newValue = this.value;        
		    $('.value').text(newValue);
		});

	var randomDestination = function(destinationArray){
		var randomNumber = Math.floor(Math.random() * destinationArray.length);

		return destinationArray[randomNumber];
	} // Function to select a random number from an array inside an object and use that number to select a index from an array

	
	//This function picks a random background image

	var randomImage = function(imageArray){
		var randomImageNumber = Math.floor(Math.random() * imageArray.length);

		console.log();

		return imageArray[randomImageNumber];
	} 
	// This array is to store the file paths of the images that will be used for the body background of the site. They will rotate on each page load.

	var imageArray = [
		"dscn8184.jpg", 
		"4.jpg", 
		"4633878864_8f7025d19d_b.jpg", 
		"RockCut-1280.jpg", 
		"Hwy_129_Ontario.JPG", 
		"winterroad-1280.jpg", 
		"Rural 2-lane road.jpg"
		];

	var destinationData = {
		hamilton: {
			natureDescription: "Hamilton boasts some of the most beautiful waterfalls in Southern Ontario, many of which are situated along scenic hiking trails. Avid hikers will want to check out Albion Falls, the Ancaster Village Waterfall Walk, and many other area trails.",
			cultureDescription: "Hamilton's cultural scene has flourished in recent years, and visitors can check out many art galleries, see live music, or visit any of the many heritage sites in the area, including the Canadian Warplane Heritage Museum and Dundurn Castle.",
			townLink: "http://www.tourismhamilton.com/",
			linkDescription: "Hamilton's tourism page",
			townLink2: "https://www.google.ca/maps/place/Hamilton,+ON/@43.2608104,-79.9354332,10z/data=!3m1!4b1!4m2!3m1!1s0x882c986c27de778f:0x2b6aee56d8df0e21",
			link2Description: "Where is Hamilton, anyway?",
			townImg: "Images/hamilton.jpg",
			imgAltText: "A scenic view of Hamilton from atop the Niagara Escarpment in fall",
			sourceLink: "http://anyacraig.com/",
			sourceLinkDescription: "Anya Craig",
			imageSource: "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Hamilton_Ontario.jpg",
			imageSourceDescription: "Image source: Wikimedia",
		},
		aberfoyle: {
			natureDescription: "",
			cultureDescription: "The Aberfoyle Antique Market, one of Canada's oldest, draws antique lovers from far and wide. Vendors offer charming and rare items at great prices. Lunch can be had at the Aberfoyle Mill, a country restaurant. For those who love animals, the nearby Donkey Sanctuary of Canada provides opportunities to interact with gentle donkeys - visitors can also hike the farm's trails or picnic by the pond. ",
			townLink: "http://aberfoyleantiquemarket.com/",
			linkDescription: "The Aberfoyle Antique Market",
			townLink2: "https://www.google.ca/maps/place/Aberfoyle,+ON+N0B/@43.4729945,-80.152601,14z/data=!4m2!3m1!1s0x882b83a59a678ffb:0x2ca9e3c89573b864",
			link2Description: "Where is Aberfoyle, anyway?",
			townImg: "Images/aberfoyle.jpg",
			imgAltText: "The Aberfoyle Mill restaurant in winter",
			sourceLink: "http://anyacraig.com/",
			sourceLinkDescription: "Anya Craig",
			imageSource: "https://www.flickr.com/photos/haroldstiver/",
			imageSourceDescription: "Image source: Harold Stiver",
		},
		portHope: {
			natureDescription: "",
			cultureDescription: "Just 100 km from Toronto lies this historic little gem. For those staycationers who just want a serene place to unwind for a weekend, Port Hope provides a scenic spot to do just that. The Carlyle Inn & Bistro is just one place worth a visit in this quaint town with a nice waterfront. The Scottish-inspired building and its in-house spa and eatery are basically an incubator of calm.",
			townLink: "http://visitporthope.ca/",
			linkDescription: "Port Hope's tourism page",
			townLink2: "https://www.google.ca/maps/place/Port+Hope,+ON/@43.9577816,-78.3010271,14z/data=!3m1!4b1!4m2!3m1!1s0x89d5b8068452761d:0xa30b8702ae4e625b",
			link2Description: "Where is Port Hope, anyway?",
			townImg: "Images/port-hope-ganaraska-river.jpg",
			imgAltText: "The Ganaraska River in Port Hope",
			sourceLink: "http://www.blogto.com/city/2015/05/the_top_5_weekend_getaways_one_hour_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.porthopesuites.ca/",
			imageSourceDescription: "Image source: porthopesuites.ca",
		},

		elora: {
			natureDescription: "If outdoor adventure is your thing, Elora is right for you. Situated on the breathtaking Elora Gorge, the town offers visitors thrills like rock climbing, river tubing, caving, swimming, ziplining, hot air ballooning, hiking, and more.",
			cultureDescription: "If you're more into quaint, small-town life, you won't be disappointed. The town has many antiques shops, walking tours, a vibrant restaurant scene, and museums. The town's early-twentieth-century charm can make a simple stroll on a Sunday day memorable.",
			townLink: "http://www.grandandgorgeous.com/",
			linkDescription: "The tourism page for Elora and Fergus",
			townImg: "Images/elora.jpg",
			imgAltText: "The cyan waters of the beautiful Elora Gorge",
			sourceLink: "http://anyacraig.com/",
			sourceLinkDescription: "Anya Craig",
			imageSource: "https://www.flickr.com/photos/narasclicks/5826464553",
			imageSourceDescription: "Image source: Narasimman Jayaraman",
		},
		headwaters: {
			natureDescription: "Headwaters, a rural region just north of Toronto, offers some of the best hiking around, as well as horseback riding. A visit to the breathtaking Cheltenham Badlands is a must for lovers of unique landscapes, and fishing aficionados will love the abundant opportunities to cast a line.",
			cultureDescription: "Gourmets will want to try all the exciting restaurants in the Headwaters area, including the Mono Cliffs Inn, a fine dining establishment nestled in the hills near Mono Cliffs Provincial Park. For those who like to eat on the move, the Credit Valley Explorer train offers a 74km ride through rolling the rolling hills of Headwaters - meals included.",
			townLink: "http://thehillsofheadwaters.com/",
			linkDescription: "The Hills of Headwaters site",
			townLink2: "https://www.google.ca/maps/place/Hills+of+Headwaters+Tourism+Association/@43.9483561,-80.0920915,11z/data=!4m2!3m1!1s0x882b008e65a2e67d:0x684a0955a47ba55e",
			link2Description: "Where is Headwaters, anyway?",
			townImg: "Images/headwaters.jpg",
			imgAltText: "The Cheltenham Badlands near Terra Cotta - rolling red stone hills reminiscent of Alberta's badlands",
			sourceLink: "http://anyacraig.com/",
			sourceLinkDescription: "Anya Craig",
			imageSource: "http://ontariotravelblog.com/2013/10/18/great-fall-drive-hills-of-headwaters/",
			imageSourceDescription: "Image source: ontariotravelblog.com",
		},
		stratford: {
			natureDescription: "",
			cultureDescription: "The Stratford Festival should be on every Ontarian's bucket list. The productions are top notch, the town is quaint, and there are plenty of reasonably priced accommodations. This year's take on Hamlet is reputed to be outstanding. The river that runs through the town is also a perfect picnicking spot, but beware of the swans (they take no sh*t but make lots of it).",
			townLink: "https://www.visitstratford.ca/",
			linkDescription: "Stratford's tourism page",
			townLink2: "https://www.google.ca/maps/place/Stratford,+ON/@43.3688236,-80.984248,13z/data=!3m1!4b1!4m2!3m1!1s0x882eadf991b497b3:0x5037b28c7231dd0",
			link2Description: "Where is Stratford, anyway?",
			townImg: "Images/stratford.jpg",
			imgAltText: "The Festival Playhouse in Stratford Ontario, illuminated in the night",
			sourceLink: "http://www.blogto.com/city/2015/05/the_top_5_weekend_getaways_two_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.troymedia.com/2014/01/25/all-the-worlds-a-stage-for-shakespeare/",
			imageSourceDescription: "Image source: troymedia.com",
		},
		niagaraontheLake: {
			natureDescription: "",
			cultureDescription: "Niagara-on-the-Lake is a perfect destination for a romantic weekend getaway. There are cosy accommodations for pretty much every budget and more than enough wineries and restaurants to keep soaking up earthly pleasures all vacation long. Looking of culture? The Shaw Festival remains one of the best modern theatre hubs in the world.",
			townLink: "https://www.niagaraonthelake.com/",
			linkDescription: "The tourism site of Niagara-on-the-Lake",
			townLink2: "https://www.google.ca/maps/place/Niagara-on-the-Lake,+ON/@43.2016178,-79.1225695,12z/data=!3m1!4b1!4m2!3m1!1s0x89d35f14d91702b1:0x760151547d11a2c0",
			link2Description: "Where is Niagara-on-the-Lake, anyway?",
			townImg: "Images/niagaraonthelake.jpeg",
			imgAltText: "A charming street scene in Niagara-on-the-Lake - visitors walk past a horse and buggy",
			sourceLink: "http://www.blogto.com/city/2015/05/the_top_5_weekend_getaways_two_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://visitniagaracanada.com/places/niagara-on-the-lake",
			imageSourceDescription: "Image source: visitniagaracanada.com",
		},
		blueMountain: {
			natureDescription: "It's not actually blue, and it's not really a mountain, but if you're the kind of person who likes to soak in nature and party at the same time, this scenic spot should be a go-to. Stay somewhere in or near the Village (I recommend the Grand Georgian) for quick access to an array of activities, restaurants and entertainment. For the non-claustrophobic, the Scenic Caves are also worth checking out.",
			cultureDescription: "",
			townLink: "http://www.bluemountain.ca/",
			linkDescription: "The website of Blue Mountain Resort",
			townLink2: "https://www.google.ca/maps/place/Blue+Mountain+Village/@44.5036931,-80.3107472,17z/data=!3m1!4b1!4m2!3m1!1s0x882a712a47cb675d:0x249dfd9dc610a134",
			link2Description: "Where is Blue Mountain, anyway?",
			townImg: "Images/bluemountain.jpg",
			imgAltText: "The ski hills of Blue Mountain Resort at dusk",
			sourceLink: "http://www.blogto.com/city/2015/05/the_top_5_weekend_getaways_two_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.bluemountainworldcup.ca/En/",
			imageSourceDescription: "Image source: bluemountainworldcup.ca",
		},
		princeEdwardCounty: {
			natureDescription: "",
			cultureDescription: "There are 26 restaurants and wineries along Prince Edward County's Taste Trail, all of them calling your name. Book off a few days and enjoy some of the best pinot noir in Ontario. For food, I suggest you start at The Hubb, owned by young siblings Alexandre and Melanie Fida, and spend the night in their adjoining inn, Angeline's.",
			townLink: "http://prince-edward-county.com/visitor-info/visitor-info-centres/",
			linkDescription: "The Visit Prince Edward County website",
			townLink2: "https://www.google.ca/maps/place/Prince+Edward,+ON/@44.0065392,-77.2052418,11z/data=!3m1!4b1!4m2!3m1!1s0x89d635998f2306db:0x3e0155810de5592d",
			link2Description: "Where is Prince Edward County, anyway?",
			townImg: "Images/princeedwardcounty.jpg",
			imgAltText: "A view of Lake Ontario from a dune in Sandbanks Provincial Park",
			sourceLink: "http://www.blogto.com/city/2015/05/the_top_5_weekend_getaways_two_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.chestnutpark.com/blog/2015/05/known-simply-as-the-county-prince-edward-county-is-anything-but-simple/",
			imageSourceDescription: "Image source: chestnutpark.com",
		},
		portStanley: {
			natureDescription: "Port Stanley is one of the best places to swim in Ontario, particularly in August. Lake Erie's at times bath-warm water and crazy waves are enough to lure vacationers to Port Stanley's world-class Main Beach, but visitors also come for the town's potent arts scene. Catch a play at the Port Stanley Festival Theatre, sit in on some musical performances or take a ride on the Port Stanley Terminal Trail.",
			cultureDescription: "",
			townLink: "http://www.portstanley.net/",
			linkDescription: "Port Stanley's official website",
			townLink2: "https://www.google.ca/maps/place/Port+Stanley,+ON/@42.6673652,-81.221149,14z/data=!3m1!4b1!4m2!3m1!1s0x882e432264b66149:0xa5066d5cba441d98",
			link2Description: "Where is Port Stanley, anyway?",
			townImg: "Images/portstanley.jpg",
			imgAltText: "Boats docked at harbour in Port Stanley",
			sourceLink: "http://www.blogto.com/city/2015/05/the_top_5_weekend_getaways_two_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.elgintourist.com/Tourism/Port-Stanley",
			imageSourceDescription: "Image source: elgintourist.com",
		},

		algonquinPark:{
			natureDescription: "Detox the metropolis out of your system by spending a week at this Ontario gem. Algonquin offers a variety of experiences, from backwoods camping and canoe trips, to ranger cabin rentals and even car camping for those feeling less adventurous. This is the rugged northern landscape at its finest, where almost every vista looks like a Group of Seven painting.",
			cultureDescription: "",
			townLink: "http://www.algonquinpark.on.ca/",
			linkDescription: "Algonquin's tourism page",
			townLink2: "https://www.google.ca/maps/place/Algonquin+Park,+ON+P0A/@45.5539695,-78.59676,15z/data=!3m1!4b1!4m2!3m1!1s0x4cd5ddfec9f121a5:0x9a93da09f5147165",
			link2Description: "Where is Algonquin Park, anyway?",
			townImg: "Images/Algonquin_Cache_Lake_Lookout.JPG",
			imgAltText: "A view of Cache Lake from a clifftop",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_three_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "https://en.wikipedia.org/wiki/List_of_protected_areas_of_Ontario#/media/File:Algonquin_Cache_Lake_Lookout.JPG",
			imageSourceDescription: "Image source: Ptrbnsn.com",
		},
		bayfield: {
			natureDescription: "Charm and historic status aren't the only things going for this small town off the coast of Lake Huron. It's also known for its geocaching -- which, for those who don't know, is a complex but fun sort of modern-day treasure hunt. This is one of Ontario's hotbeds for the activity, which requires a GPS system to track down a hidden cache left by other players.",
			cultureDescription: "",
			townLink: "http://www.villageofbayfield.com/",
			linkDescription: "Bayfield's tourism page",
			townLink2: "https://www.google.ca/maps/place/Bayfield,+Bluewater,+ON/@43.5594441,-81.6983886,14z/data=!3m1!4b1!4m2!3m1!1s0x8828cdfc3f52eac5:0xe605debd476ba488",
			link2Description: "Where is Bayfield, anyway?",
			townImg: "Images/bayfield.jpg",
			imgAltText: "The lake at Bayfield, with a marina in view",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_three_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://ontariotraveldivas.com/2011/07/11/hello-blue-flag/",
			imageSourceDescription: "Image source: ontariotraveldivas.com",
		},
		amherstIsland: {
			natureDescription: "This little island on Lake Ontario just east of Kingston is a great place to spend a day or weekend on the water. Sail around the island and stop at its many ports (the hamlet of Stella is, according to some, one of the prettiest towns in the country), or explore underwater (there's a shipwreck graveyard off the island's south shore). There are a host of picturesque bed & breakfasts at which to stay.",
			cultureDescription: "",
			townLink: "http://www.amherstisland.on.ca/",
			linkDescription: "Amherst Island's tourism page",
			townLink2: "https://www.google.ca/maps/place/Amherst+Island,+ON+K0K/@44.1256534,-76.719165,15z/data=!3m1!4b1!4m2!3m1!1s0x89d7e3e8135d7f9b:0xbc67044735e9c55c",
			link2Description: "Where is Amherst Island, anyway?",
			townImg: "Images/amherstisland.jpg",
			imgAltText: "Amherst island from the air at dusk",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_three_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.loyalisttownship.ca/",
			imageSourceDescription: "Image source: loyalisttownship.ca",
		},
		frenchRiver: {
			natureDescription: 'It is, after all, called "the land of the voyageurs." Rent a trailer or cottage or pack a tent and retreat to this scenic spot that\'s far enough north to feel rugged and completely removed from urban life. Explore the water, and stop by the French River Trading Post, one of the country\'s oldest gift shops. Camping is a good bet, but so too are cottage rentals.',
			cultureDescription: "",
			townLink: "http://www.frenchriver.ca/",
			linkDescription: "French River's tourism page",
			townLink2: "https://www.google.ca/maps/place/French+River,+ON/@46.148079,-80.4171565,11z/data=!3m1!4b1!4m2!3m1!1s0x4d2ec62e5397608d:0x50f5c528016efa46",
			link2Description: "Where is French River, anyway?",
			townImg: "Images/French_River.jpg",
			imgAltText: "The French River, where it opens into Georgian Bay",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_three_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://stateofthebay.gbbr.ca/about/",
			imageSourceDescription: "Image source: stateofthebay.ca",
		},
		bancroft: {
			natureDescription: "Bancroft offers the tranquility of the Canadian Shield with all the amenities of a modern community. Built alongside the York River in the mid-1800s, Bancroft sits at the northern tip of Hastings County and the southern end of Algonquin Park.",
			cultureDescription: 'Grail Springs, the holistic wellness retreat centre is located in an old, ivy-covered, castle-like estate near Bancroft that\'ll win your heart before you even step inside. They offer three- to 22-day retreats with various goals, like the "Body Detox Cleanse," the "Energy Regeneration," and even the hefty "Life Transformation."',
			townLink: "http://www.bancroft.ca/",
			linkDescription: "Bancroft's tourism page",
			townLink2: "https://www.google.ca/maps/place/Bancroft,+ON+K0L/@45.0440914,-77.7676535,11z/data=!3m1!4b1!4m2!3m1!1s0x4cd47b56754675a5:0x5bd2c5aae9c601aa",
			link2Description: "Where is Bancroft, anyway?",
			townImg: "Images/bancroft.jpg",
			imgAltText: "The hills near Bancroft, shrouded in the autumn mist",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_three_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.redbubble.com/people/fazny/works/3895991-fall-over-bancroft-ontario",
			imageSourceDescription: "Image source: Tracy Faught",
		},
		wolfeIsland: {
			natureDescription: "Ditch the mainland and spend a weekend on this island, which sits right where Lake Ontario ends and the St. Lawrence River begins. This is a great place for cycling, fishing and camping.",
			cultureDescription: "There's the Wolfe Island Music Festival on August 7-8 (Hayden will be there!).",
			townLink: "http://www.wolfeisland.com/",
			linkDescription: "Wolfe Island's tourism page",
			townLink2: "https://www.google.ca/maps/place/Wolfe+Island,+Frontenac+Islands,+ON/@44.1670922,-76.3465488,12z/data=!3m1!4b1!4m2!3m1!1s0x4ccd554ddead890b:0xbd7608729cef194d",
			link2Description: "Where is Wolfe Island, anyway?",
			townImg: "Images/wolfeisland.jpg",
			imgAltText: "An aerial view of Wolfe Island and the St.Lawrence River",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_four_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.thousandislandslife.com/ThePlace/Communities/tabid/416/agentType/View/PropertyID/8/Default.aspx",
			imageSourceDescription: "Image source: thousandislandslife.com",
		},
		tobermory: {
			natureDescription: "Head to the tip of the Bruce Peninsula and explore the rugged landscape and the area's many shipwrecks. You can rent your own boat and snorkel or scuba dive, or take a glass-bottomed ferry ride to enjoy the spooky sites. There are lots of campsites, cabins and B&Bs to stay at.",
			cultureDescription: "",
			townLink: "http://tobermory.com/",
			linkDescription: "Tobermory's tourism page",
			townLink2: "https://www.google.ca/maps/place/Tobermory,+ON+N0H/@45.254407,-81.6655522,15z/data=!3m1!4b1!4m2!3m1!1s0x4d2d0ba9fb4f9461:0x3b2e70b0e46a3526",
			link2Description: "Where is Tobermory, anyway?",
			townImg: "Images/tobermory.jpg",
			imgAltText: "A shipwreck in the shallow azure waters of Tobermory, with cottages in the background",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_four_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.greatlakesdrive.com/GLD/property/burmuda-wooden-schooner-1870-shipwreck/",
			imageSourceDescription: "Image source: greatlakesdrive.com",
		},
		mattawa: {
			natureDescription: "This secluded corner of Ontario offers nature lovers a chance to stay in a Shamayim Cabin, Ma'ayan Chalet, Mongolian Yurt or to even try glamping (glam-camping).",
			cultureDescription: "",
			townLink: "http://www.mattawa.ca/",
			linkDescription: "Mattawa's tourism page",
			townLink2: "https://www.google.ca/maps/place/Mattawa,+ON/@46.3124675,-78.7058565,15z/data=!3m1!4b1!4m2!3m1!1s0x4d282a5b5d8d49b7:0x60cfd033dd7524e0",
			link2Description: "Where is Mattawa, anyway?",
			townImg: "Images/mattawa.jpg",
			imgAltText: "The Mattawa River at dawn",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_four_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "https://www.flickr.com/photos/kinamahina/sets/72157603602761215/",
			imageSourceDescription: "Image source: Anik Richard",
		},
		theFingerLakes: {
			natureDescription: "Looking to get out of Ontario? One of your best bets four hours away is the Finger Lakes region. You can tour the area's many wineries, some of which turn out top notch Riesling, but also just take in the splendour of the landscape.",
			cultureDescription: "Rolling hills provide spectacular lake vistas, and there's an abundance of waterfalls to explore. Skip staying in Ithaca for lakeside accommodations.",
			townLink: "http://www.fingerlakes.org/",
			linkDescription: "The Finger Lakes' tourism page",
			townLink2: "https://www.google.ca/maps/place/Finger+Lakes,+New+York,+USA/@42.6281563,-76.9182833,10z/data=!3m1!4b1!4m2!3m1!1s0x89da04b6e3af32f1:0x3abe549402e17700",
			link2Description: "Where are the Finger Lakes, anyway?",
			townImg: "Images/fingerlakes.jpg",
			imgAltText: "The rolling hills of the Finger Lakes crowned with glorious fall foliage",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_four_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://visitfingerlakes.com/travel-info/trails/",
			imageSourceDescription: "Image source: visitfingerlakes.com",
		},
		ottawa: {
			natureDescription: "Every Canadian's bucket list should include a road trip to our capital city. Make the tourist stops - at the Parliament Buildings, the Rideau Canal, the War Museum - but also make sure to check out the ByWard Market, a farmers' market by day and party hub by night.",
			cultureDescription: "",
			townLink: "http://www.ottawatourism.ca/",
			linkDescription: "Ottawa's tourism page",
			townLink2: "https://www.google.ca/maps/place/Ottawa,+ON/@45.2501566,-75.8002568,10z/data=!3m1!4b1!4m2!3m1!1s0x4cce05b25f5113af:0x8a6a51e131dd15ed",
			link2Description: "Where is Ottawa, anyway?",
			townImg: "Images/ottawa.jpg",
			imgAltText: "Parliament Hill in Ottawa, viewed from across the river at night in winter",
			sourceLink: "http://www.blogto.com/city/2015/06/the_top_5_weekend_getaways_four_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "https://www.flickr.com/photos/30201239@N00/6552308227",
			imageSourceDescription: "Image source: joiseyshowaa",
		},
		perth: {
			natureDescription: "Perth has been called “Ontario’s prettiest town”. Not only does it have wonderful heritage architecture, but the picturesque Tay River runs right through the middle of town and even creates two islands.",
			cultureDescription: "Resident outdoor enthusisasts are enthralled by the region's excellent canoeing, hunting, fishing, camping and hiking opportunities. While artists and musicians are drawn to the many opportunities to this creative community has to offer.",
			townLink: "http://www.perthtourism.ca/",
			linkDescription: "Perth's tourism page",
			townLink2: "https://www.google.ca/maps/place/Perth,+ON/@44.8991091,-76.2500711,13z/data=!3m1!4b1!4m2!3m1!1s0x4cd27a5d486b5611:0x5037b28c7231620",
			link2Description: "Where is Perth, anyway?",
			townImg: "Images/perth2.jpg",
			imgAltText: "A limestone building beside the Tay River near Stewart Park in Perth",
			sourceLink: "http://www.perthtourism.ca/travel--transition.html",
			sourceLinkDescription: "perthtourism.ca",
			imageSource: "https://www.flickr.com/photos/richardmcguire/6128388084",
			imageSourceDescription: "Image source: Richard McGuire",
		},
		peleeIsland: {
			natureDescription: "Often hailed as one of Ontario's best kept secrets, Pelee Island is a perfect escape from urban life. It's saturated with nature, plus it boasts a thriving community of artists, boutiques and restaurants. Make sure to hit up some of the local wine producers in the area.",
			cultureDescription: "",
			townLink: "http://pelee.com/",
			linkDescription: "Pelee Island's tourism page",
			townLink2: "https://www.google.ca/maps/place/Pelee+Island,+Pelee,+ON/@41.7745526,-82.6549693,12z/data=!3m1!4b1!4m2!3m1!1s0x883af15a0c9b4d55:0xe6643190f8294ce",
			link2Description: "Where is Pelee Island, anyway?",
			townImg: "Images/peleeisland.jpg",
			imgAltText: "Fish Point at Pelee Island's south end, blanketed by the morning mists of Lake Erie",
			sourceLink: "http://www.blogto.com/city/2015/07/the_top_5_weekend_getaways_five_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://anyacraig.com/",
			imageSourceDescription: "Image source: Anya Craig",
		},
		ladyEvelynLake: {
			natureDescription: "Ellen Island Camp is a remote fishing lodge on the pristine waters of Lady Evelyn Lake. Retreat to this northern Ontario spot and spend your days upping your fishing game before retiring to one of its cosy cottages for some rustic charm and a nighttime fire.",
			cultureDescription: "",
			townLink: "http://www.ellenislandcamp.com/",
			linkDescription: "Lady Evelyn Lake's tourism page",
			townLink2: "https://www.google.ca/maps/place/Lady+Evelyn+Lake,+Ontario/@47.3456082,-80.1546223,11z/data=!3m1!4b1!4m2!3m1!1s0x4d25c27154171397:0x9b06c1fa8f5755bb",
			link2Description: "Where is Lady Evelyn Lake, anyway?",
			townImg: "Images/ladyevelynsmoothwater_background.jpg",
			imgAltText: "A rocky river in Lady Evelyn-Smoothwater Provincial Park",
			sourceLink: "http://www.blogto.com/city/2015/07/the_top_5_weekend_getaways_five_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.ontarioparks.com/park/ladyevelynsmoothwater",
			imageSourceDescription: "Image source: ontarioparks.com",
		},
		oldForge: {
			natureDescription: "The cool thing about this picturesque corner of New York State is that you can go to find some peace and quiet or to seek thrills. Located in the Adirondack Mountains, you can set up in a chalet as home base, and from there go cycling, take a scenic train ride, try out a water safari, go horseback riding... It's like camp for grown-ups.",
			cultureDescription: "",
			townLink: "http://www.oldforgeny.com/",
			linkDescription: "Old Forge, NY's tourism page",
			townLink2: "https://www.google.ca/maps/place/Old+Forge,+NY,+USA/@43.7078249,-74.9779043,14z/data=!3m1!4b1!4m2!3m1!1s0x89d8caa5ed6d98d9:0xa99086e2aaebbe08",
			link2Description: "Where is Old Forge, anyway?",
			townImg: "Images/oldforge.jpg",
			imgAltText: "Hikers relax on a mountaintop in the Adirondack range near Old Forge, New York",
			sourceLink: "http://www.blogto.com/city/2015/07/the_top_5_weekend_getaways_five_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://www.syracuse.com/opinion/index.ssf/2014/05/supreme_court_clean_air_ruling_a_win_for_the_adirondacks_editorial.html",
			imageSourceDescription: "Image source: Peter Chen",
		},
		westMichigan: {
			natureDescription: "The crystal-clear waters and sugar sand beaches of West Michigan are known as one of America's treasures. If you want to combine your beach adventure with some urban exploring, set up in Grand Rapids and drive to the beach for the day before returning to the city to eat, drink and take in the nightlife. This is a city that's (back) on the rise.",
			cultureDescription: "",
			townLink: "http://wmta.org/",
			linkDescription: "West Michgan's tourism page",
			townLink2: "https://www.google.ca/maps/place/Traverse+City,+MI,+USA/@44.7488574,-85.6050075,9z/data=!4m2!3m1!1s0x881e32b2d7da29dd:0x47bfdc3f3f745621",
			link2Description: "Where is West Michigan, anyway?",
			townImg: "Images/westmichigan.jpg",
			imgAltText: "The sandy beach at Elberta, Michigan, on Lake Michigan",
			sourceLink: "http://www.blogto.com/city/2015/07/the_top_5_weekend_getaways_five_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://galleryhip.com/beaches-sleeping-bear-dunes.html",
			imageSourceDescription: "Image source: galleryhip.com",
		},
		montreal: {
			natureDescription: "",
			cultureDescription: "Montreal is a natural getaway from Toronto in the five hour range. With festivals year-round, booming nightlife (this NYC-style cabaret is fun), food trucks, tons of historic and cultural sites to visit, and a culinary scene that rivals our own, you might want to reserve three days to explore here.",
			townLink: "http://www.tourisme-montreal.org/",
			linkDescription: "Montreal's tourism page",
			townLink2: "https://www.google.ca/maps/place/Montreal,+QC/@45.5601257,-73.7120503,11z/data=!3m1!4b1!4m2!3m1!1s0x4cc91a541c64b70d:0x654e3138211fefef",
			link2Description: "Where is Montreal, anyway?",
			townImg: "Images/montreal.jpg",
			imgAltText: "A street in Montreal's old town at night, the lights of the restaurants glistening on the cobblestone streets",
			sourceLink: "http://www.blogto.com/city/2015/07/the_top_5_weekend_getaways_five_hours_from_toronto/",
			sourceLinkDescription: "BlogTO",
			imageSource: "http://montrealvisitorsguide.com/",
			imageSourceDescription: "Image source: montrealvisitorsguide.com",
		}
	}; //The above object lists the attendant information for each town so that we can later grab it with jQuery to display it on the page.


	//The objects containing the arrays of town names, which are strings. They are divided by driving time and each object contains three arrays (nature, culture, and both)

	var oneHour = {
		nature: ["Hamilton", "Elora", "Headwaters"], //end of nature
		culture: ["Hamilton", "Aberfoyle", "Elora", "Port Hope", "Headwaters"], //end of culture
		both: ["Hamilton", "Elora", "Headwaters"] //end of both
	}; // end of oneHour

	var twoHours = {
		nature: ["Prince Edward County", "Blue Mountain", "Port Stanley"],//end of nature
		culture: ["Stratford", "Prince Edward County", "Niagara on the Lake", "Port Stanley"],//end of culture
		both: ["Prince Edward County", "Port Stanley"]//end of both
	} //end of twoHours

	var threeHours = {
		nature: ["Algonquin Park", "Bayfield", "Amherst Island", "French River", "Bancroft"], //end of nature
		culture: ["Bancroft"], //end of culture
		both: ["Bancroft"] //end of both
	} //end of threeHours

	var fourHours = {
		nature: ["Wolfe Island", "Tobermory", "Mattawa", "Perth", "The Finger Lakes"], //end of nature
		culture: ["Ottawa", "Perth", "The Finger Lakes"], //end of culture
		both: ["The Finger Lakes", "Perth"] //end of both
		
	} //end of fourHours

	var fiveHours = {
		nature: ["Pelee Island", "Lady Evelyn Lake", "Old Forge", "West Michigan"], //end of nature
		culture: ["Pelee Island", "Montreal", "West Michigan"], //end of culture
		both: ["Pelee Island", "West Michigan"] //end of both
	} //end of fiveHours

	// Declare variables
	
	var drivingTime;
	var natureCulture;
	var key;

	

	function getDestination(drivingTime, natureCulture) {

		var finalRecommendation; 

		// ONE HOUR DRIVING TIME --------------------------------

		if (drivingTime==="1" && natureCulture==="nature"){

			finalRecommendation = randomDestination(oneHour.nature);

		}

		else if (drivingTime==="1" && natureCulture==="culture"){

			finalRecommendation = randomDestination(oneHour.culture);

		}


		else if (drivingTime==="1" && natureCulture==="both"){

			finalRecommendation = randomDestination(oneHour.both);

		}

		// TWO HOURS DRIVING TIME --------------------------------

		else if (drivingTime==="2" && natureCulture==="nature"){

			finalRecommendation = randomDestination(twoHours.nature);

		}

		else if (drivingTime==="2" && natureCulture==="culture"){

			finalRecommendation = randomDestination(twoHours.culture);

		}

		else if (drivingTime==="2" && natureCulture==="both"){

			finalRecommendation = randomDestination(twoHours.both);

			console.log(finalRecommendation);
		}

		// THREE HOURS DRIVING TIME --------------------------------

		else if (drivingTime==="3" && natureCulture==="nature"){

			finalRecommendation = randomDestination(threeHours.nature);

		}

		else if (drivingTime==="3" && natureCulture==="culture"){

			finalRecommendation = randomDestination(threeHours.culture);

		}

		else if (drivingTime==="3" && natureCulture==="both"){

			finalRecommendation = randomDestination(threeHours.both);

		}

		// FOUR HOURS DRIVING TIME --------------------------------

		else if (drivingTime==="4" && natureCulture==="nature"){

			finalRecommendation = randomDestination(fourHours.nature);

		}

		else if (drivingTime==="4" && natureCulture==="culture"){

			finalRecommendation = randomDestination(fourHours.culture);

		}

		else if (drivingTime==="4" && natureCulture==="both"){

			finalRecommendation = randomDestination(fourHours.both);

		}

		// FIVE HOURS DRIVING TIME --------------------------------

		else if (drivingTime==="5" && natureCulture==="nature"){

			finalRecommendation = randomDestination(fiveHours.nature);


		}

		else if (drivingTime==="5" && natureCulture==="culture"){

			finalRecommendation = randomDestination(fiveHours.culture);

		}

		else if (drivingTime==="5" && natureCulture==="both"){

			finalRecommendation = randomDestination(fiveHours.both);	

		}

		else {
		
			finalRecommendation = "... wait - did you select any criteria";

		}

		// This section removes converts our town names(finalRecommendation) to camel case and removes spaces so that we can follow best naming practices

		key = finalRecommendation.charAt(0).toLowerCase() + finalRecommendation.slice(1,finalRecommendation.length).replace(/\s/g, ''); 

		//This next section grabs elements in the DOM and uses jQuery methods to alter them dynamically

		// Inject the result of the conditional into the h3
		$(".result").empty().append(finalRecommendation);

		// Insert the nature description into the first first p tag
		$(".natureDescription").empty().append(destinationData[key].natureDescription);

		$(".cultureDescription").empty().append(destinationData[key].cultureDescription);

		//Insert an image file path into the image src attribute so that an image comes up that matches the town name and insert alt text for the image
		$(".reveal img").attr("src",destinationData[key].townImg).attr("alt",destinationData[key].imgAltText);

		//Insert a URL into the href attribute of the .link1 <a> tag that matches the town
		$(".link1").attr("href", destinationData[key].townLink);

		//Insert a string (a link description) into the <a> tag that matches the link
		$(".link1").text(destinationData[key].linkDescription);

		//Insert a URL into the href attribute of the .link2 <a> tag that matches the town
		$(".link2").attr("href", destinationData[key].townLink2);

		//Insert a string (a link description) into the <a> tag that matches the link
		$(".link2").text(destinationData[key].link2Description);

		$(".source").attr("href", destinationData[key].sourceLink);

		$(".source").text(destinationData[key].sourceLinkDescription);

		$(".image_src").attr("href", destinationData[key].imageSource);

		$(".image_src").text(destinationData[key].imageSourceDescription);

 	} //end of get destination function

	// When the user submits the form, don't refresh the page - otherwise, we will go back to the submit form and not render our reveal section

	$("form").on("submit", function(e){
		e.preventDefault();

		// Setting the variables to hold the values from the form

		drivingTime = $("input[type=range]").val();
		natureCulture = $("input[type=radio]:checked").val();
		

	// When the user submits the form (event described above), go into the objects for driving time and the arrays for nature, culture, or both, and choose a random index from that array - here, we're calling the getDestination function that we created above - this is very important!

		getDestination(drivingTime, natureCulture);

		//The function has now been called!

	}); // end of function that executes when you submit the form

	//This next section allows users to click the "suggest another" button to get a new result from the same array
	$('.new-results').on('click', function() {

		getDestination(drivingTime,natureCulture);

	});

	//This bit allows users to reload the entire page by clocking a "start over" button

	$(".reload").on("click", function(){
		location.reload(true);
		// $("body").css("background-image", "url(" + "Image/4.jpg" + ")");
		// console.log("Reload");
	});

	// Hide the form and fadeIn the result div

	$(".form").on("submit", function (){
		$(this).slideUp(500);
		$(".reveal").removeClass("hidden").fadeIn();
		// $("h1").addClass("shrink");
		// $("h2").addClass("also-shrink);

	});

	//This method sets a new random body background image each time the page reloads

	$(window).load(function(){
		$("body").css("background-image", "url(" + "'Images/Backgrounds/" + randomImage(imageArray) + "')");
	});



});  //closing .ready method

