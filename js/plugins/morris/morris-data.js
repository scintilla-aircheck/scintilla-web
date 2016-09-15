// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            so2: 2666,
            no2: null,
            o3: 2647
        }, {
            period: '2010 Q2',
            so2: 2778,
            no2: 2294,
            o3: 2441
        }, {
            period: '2010 Q3',
            so2: 4912,
            no2: 1969,
            o3: 2501
        }, {
            period: '2010 Q4',
            so2: 3767,
            no2: 3597,
            o3: 5689
        }, {
            period: '2011 Q1',
            so2: 6810,
            no2: 1914,
            o3: 2293
        }, {
            period: '2011 Q2',
            so2: 5670,
            no2: 4293,
            o3: 1881
        }, {
            period: '2011 Q3',
            so2: 4820,
            no2: 3795,
            o3: 1588
        }, {
            period: '2011 Q4',
            so2: 15073,
            no2: 5967,
            o3: 5175
        }, {
            period: '2012 Q1',
            so2: 10687,
            no2: 4460,
            o3: 2028
        }, {
            period: '2012 Q2',
            so2: 8432,
            no2: 5713,
            o3: 1791
        }],
        xkey: 'period',
        ykeys: ['so2', 'no2', 'o3'],
        labels: ['so2', 'no2', 'o3'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 802
        }, {
            d: '2012-10-02',
            visits: 783
        }, {
            d: '2012-10-03',
            visits: 820
        }, {
            d: '2012-10-04',
            visits: 839
        }, {
            d: '2012-10-05',
            visits: 792
        }, {
            d: '2012-10-06',
            visits: 859
        }, {
            d: '2012-10-07',
            visits: 790
        }, {
            d: '2012-10-08',
            visits: 1680
        }, {
            d: '2012-10-09',
            visits: 1592
        }, {
            d: '2012-10-10',
            visits: 1420
        }, {
            d: '2012-10-11',
            visits: 882
        }, {
            d: '2012-10-12',
            visits: 889
        }, {
            d: '2012-10-13',
            visits: 819
        }, {
            d: '2012-10-14',
            visits: 849
        }, {
            d: '2012-10-15',
            visits: 870
        }, {
            d: '2012-10-16',
            visits: 1063
        }, {
            d: '2012-10-17',
            visits: 1192
        }, {
            d: '2012-10-18',
            visits: 1224
        }, {
            d: '2012-10-19',
            visits: 1329
        }, {
            d: '2012-10-20',
            visits: 1329
        }, {
            d: '2012-10-21',
            visits: 1239
        }, {
            d: '2012-10-22',
            visits: 1190
        }, {
            d: '2012-10-23',
            visits: 1312
        }, {
            d: '2012-10-24',
            visits: 1293
        }, {
            d: '2012-10-25',
            visits: 1283
        }, {
            d: '2012-10-26',
            visits: 1248
        }, {
            d: '2012-10-27',
            visits: 1323
        }, {
            d: '2012-10-28',
            visits: 1390
        }, {
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'so2',
            geekbench: 136
        }, {
            device: 'so2 3G',
            geekbench: 137
        }, {
            device: 'so2 3GS',
            geekbench: 275
        }, {
            device: 'so2 4',
            geekbench: 380
        }, {
            device: 'so2 4S',
            geekbench: 655
        }, {
            device: 'so2 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
