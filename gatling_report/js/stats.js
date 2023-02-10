var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "30000",
        "ok": "15309",
        "ko": "14691"
    },
    "minResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "17766",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "6642",
        "ok": "3183",
        "ko": "10247"
    },
    "standardDeviation": {
        "total": "4761",
        "ok": "2878",
        "ko": "3493"
    },
    "percentiles1": {
        "total": "8522",
        "ok": "1668",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "4976",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10004",
        "ok": "7897",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "10006",
        "ok": "8790",
        "ko": "10010"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4570,
    "percentage": 15
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 514,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 10225,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 14691,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "170.1",
        "ko": "163.233"
    }
},
contents: {
"req_root-end-point-1a094": {
        type: "REQUEST",
        name: "root end point",
path: "root end point",
pathFormatted: "req_root-end-point-1a094",
stats: {
    "name": "root end point",
    "numberOfRequests": {
        "total": "30000",
        "ok": "15309",
        "ko": "14691"
    },
    "minResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "17766",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "6642",
        "ok": "3183",
        "ko": "10247"
    },
    "standardDeviation": {
        "total": "4761",
        "ok": "2878",
        "ko": "3493"
    },
    "percentiles1": {
        "total": "8522",
        "ok": "1668",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "4976",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10004",
        "ok": "7897",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "10006",
        "ok": "8790",
        "ko": "10010"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4570,
    "percentage": 15
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 514,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 10225,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 14691,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "170.1",
        "ko": "163.233"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
