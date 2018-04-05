      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        [	'	ID	'	, 	'Protein Density'	, 	'Fat or Carb'	, 	'	Sugar Added?	'	, 	'Caloric Density'					]	,
[	'	California Natural Almonds	'	,	3.62	,	0.69	,	'	No	'	,	5.8					]	,
[	'	Dates, Loose Pack	'	,	0.61	,	0.00	,	'	No	'	,	3.3					]	,
[	'	Dried Cranberries	'	,	0.00	,	0.02	,	'	Yes	'	,	3.2					]	,
[	'	Ground Almonds, Blanched	'	,	3.56	,	0.74	,	'	No	'	,	5.9					]	,
[	'	Large Prunes, Pits Removed	'	,	1.11	,	0.00	,	'	No	'	,	2.7					]	,
[	'	Sultana Raisins	'	,	1.00	,	0.01	,	'	No	'	,	3					]	,
[	'	Thompson Raisins	'	,	0.97	, 	0.00	,	'	No	'	,	3.1					]	,
[	'	Turkish Apricots	'	,	1.48	,	0.01	,	'	No	'	,	2.7					]	,
[	'	Walnut Pieces	'	,	2.24	,	0.50	,	'	No	'	,	6.7					]	,
[	'	All Purpose Flour Made Without Wheat Ingredients	'	,	2.65	,	0.03	,	'	No	'	,	3.4					]	,
[	'	Apple Rings	'	,	0.42	,	0.00	,	'	No	'	,	2.4					]	,
[	'	Barry Callebaut Dark Chocolate Callets	'	,	0.98	,	0.40	,	'	Yes	'	,	5.1					]	,
[	'	Belcolade Premium Belgian Bittersweet Chocolate Wafers	'	,	1.11	, 	0.42	,	'	Yes	'	,	5.4					]	,
[	'	Belgian Dark Chocolate	'	,	0.94	,	0.42	,	'	Yes	'	,	5.3					]	,
[	'	Black Mission Figs	'	,	1.07	,	0.07	,	'	No	'	,	2.8					]	,
[	'	California Organic Medjool Dates	'	,	0.00	,	0.00	,	'	No	'	,	3.611111111					]	,
[	'	Carob Chips	'	,	0.21	,	0.21	,	'	Yes	'	,	4.7					]	,
[	'	Chocolate Chips, Semi Sweet	'	,	0.87	,	0.27	,	'	Yes	'	,	4.6					]	,
[	'	Coconut Roll Dates	'	,	1.00	,	0.04	,	'	No	'	,	3					]	,
[	'	Compound Chocolate, Flavoured Chips	'	,	0.63	, 	0.26	,	'	Yes	'	,	4.8					]	,
[	'	Crystallized Ginger Baking Chips	'	,	0.65	,	0.00	,	'	Yes	'	,	3.1					]	,
[	'	Deluxe Mincemeat	'	,	0.59	,	0.00	,	'	Yes	'	,	1.7					]	,
[	'	Diced Dates, Dextrose Coated	'	,	0.57	,	0.01	,	'	Yes	'	,	8.75					]	,
[	'	Dried Blueberries	'	,	0.56	,	0.04	,	'	Yes	'	,	3.6					]	,
[	'	Dried Blueberries, Wild	'	,	0.53	,	0.04	,	'	Yes	'	,	3.8					]	,
[	'	Dried Cantaloupe	'	,	0.86	,	0.00	,	'	Yes	'	,	3.5					]	,
[	'	Dried Mango Slices	'	,	0.00	, 	0.00	,	'	Yes	'	,	3.333333333					]	,
[	'	Dried Mango Slices, Unsweetened	'	,	0.28	,	0.00	,	'	No	'	,	3.6					]	,
[	'	Dried Mixed Fruit With Prunes	'	,	1.11	,	0.00	,	'	Yes	'	,	5					]	,
[	'	Dried Mulberries	'	,	3.08	,	0.03	,	'	No	'	,	3.25					]	,
[	'	Dried Strawberries	'	,	0.00	,	0.00	,	'	Yes	'	,	3.5					]	,
[	'	Dried Tart Cherries	'	,	0.86	,	0.00	,	'	Yes	'	,	3.5					]	,
[	'	Dry Roasted Chopped Peanuts	'	,	4.00	,	0.73	,	'	No	'	,	6.666666667					]	,
[	'	Figs Turkish Natural	'	,	1.20	, 	0.02	,	'	No	'	,	2.5					]	,
[	'	Goji Berries	'	,	4.00	,	0.01	,	'	No	'	,	3.5					]	,
[	'	Golden Raisins	'	,	1.00	,	0.01	,	'	No	'	,	3					]	,
[	'	Green Glacé Cherries, Whole & Broken	'	,	0.07	,	0.00	,	'	Yes	'	,	2.8					]	,
[	'	Ground Almonds, Natural	'	,	3.62	,	0.72	,	'	No	'	,	5.8					]	,
[	'	High Protein Multigrain Bread Mix	'	,	10.00	,	0.01	,	'	Yes	'	,	3.6					]	,
[	'	Honey Dates, Pits Removed	'	,	0.00	,	0.00	,	'	No	'	,	2.8					]	,
[	'	Jumbo Chocolate Chips	'	,	0.87	,	0.27	,	'	Yes	'	,	4.6					]	,
[	'	Jumbo Flame Raisins	'	,	1.00	,	0.01	,	'	No	'	,	3					]	,
[	'	Mixed Peel	'	,	0.10	,	0.00	,	'	Yes	'	,	2.9					]	
      ]);

      var options = {
        title: 'Correlation between life expectancy, fertility rate ' +
               'and population of some world countries (2010)',
        hAxis: {title: 'Protein Density'},
        vAxis: {title: 'Carb      ...........................................................            Fat'},
        bubble: {textStyle: {fontSize: 10}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
