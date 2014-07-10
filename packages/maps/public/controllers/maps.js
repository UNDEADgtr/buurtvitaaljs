'use strict';

angular.module('mean.maps').controller('MapsController', ['$scope', '$rootScope', '$location', 'Global',
    function ($scope, $rootScope, $location, Global) {
        $scope.global = Global;

        var mapItems = [];

        mapItems.push({name: 'Activiteiten', id: '1'});
        mapItems.push({name: 'Amsterdam.kml', id: '2'});
        mapItems.push({name: 'Basisscholen in Nederland', id: '3'});
        mapItems.push({name: 'Basisscholen West', id: '4'});
        mapItems.push({name: 'Begraafplaatsen', id: '5'});
        mapItems.push({name: 'Overzicht van Beschermde Natuurmonumenten in Nederland', id: '6'});
        mapItems.push({name: 'BS2', id: '7'});
        mapItems.push({name: 'Datastore Basisscholen', id: '8'});


        $scope.mapItems = mapItems;

    }
])
    .controller('MapController', ['$scope', '$rootScope', '$stateParams',
        function ($scope, $rootScope, $stateParams) {

            $scope.map = {
                center: {
                    latitude: 52.369871,
                    longitude: 4.899551
                },
                zoom: 14,
                markers: [
                    {
                        id: 1,
                        icon: 'packages/maps/public/assets/img/blue_marker.png',
                        latitude: 52.374880,
                        longitude: 4.893425,
                        showWindow: false,
                        title: 'Sint Nicolaasstraat 9'
                    },
                    {
                        id: 2,
                        icon: 'packages/maps/public/assets/img/blue_marker.png',
                        latitude: 52.373366,
                        longitude: 4.900376,
                        showWindow: false,
                        title: 'Zeedijk 127'
                    },
                    {
                        id: 3,
                        icon: 'packages/maps/public/assets/img/blue_marker.png',
                        latitude: 52.371182,
                        longitude: 4.895313,
                        showWindow: false,
                        title: 'Oudezijds Voorburgwal 197'
                    }
                ]
            };

            $scope.map.markers.forEach(function (marker) {
                marker.closeClick = function () {
                    marker.showWindow = false;
                    $scope.$apply();
                };
                marker.onClicked = function () {
                    onMarkerClicked(marker);
                };
            });

            var onMarkerClicked = function (marker) {
                marker.showWindow = true;
                $scope.$apply();
            };

        }
    ])
    .controller('MarkerController', ['$scope', '$rootScope', '$stateParams',
        function ($scope, $rootScope, $stateParams) {

            $scope.info = $stateParams.markerId;

        }
    ]).controller('ReportMapController', ['$scope', '$rootScope', '$stateParams', '$log',
        function ($scope, $rootScope, $stateParams, $log) {

            var reportItems = [];

            reportItems.push({name: 'Activiteiten', id: '1'});
            reportItems.push({name: 'Amsterdam.kml', id: '2'});
            reportItems.push({name: 'Basisscholen in Nederland', id: '3'});
            reportItems.push({name: 'Basisscholen West', id: '4'});
            reportItems.push({name: 'Begraafplaatsen', id: '5'});
            reportItems.push({name: 'Overzicht van Beschermde Natuurmonumenten in Nederland', id: '6'});
            reportItems.push({name: 'BS2', id: '7'});
            reportItems.push({name: 'Datastore Basisscholen', id: '8'});

            $scope.reportItems = reportItems;

            $scope.map = {
                center: {
                    latitude: 52.369871,
                    longitude: 4.899551
                },
                zoom: 14,
                control: {},
                markers: [
                    {
                        id: 1,
                        icon: 'packages/maps/public/assets/img/blue_marker.png',
                        latitude: 52.374880,
                        longitude: 4.893425,
                        showWindow: false,
                        title: 'Sint Nicolaasstraat 9'
                    },
                    {
                        id: 2,
                        icon: 'packages/maps/public/assets/img/blue_marker.png',
                        latitude: 52.373366,
                        longitude: 4.900376,
                        showWindow: false,
                        title: 'Zeedijk 127'
                    },
                    {
                        id: 3,
                        icon: 'packages/maps/public/assets/img/blue_marker.png',
                        latitude: 52.371182,
                        longitude: 4.895313,
                        showWindow: false,
                        title: 'Oudezijds Voorburgwal 197'
                    }
                ],
                clickedMarker: {
                    title: 'You clicked here',
                    latitude: 52.369871,
                    longitude: 4.899551,
                    showWindow: null
                },
                events: {
                    click: function (mapModel, eventName, originalEventArgs) {
                        // 'this' is the directive's scope
                        $log.log('user defined event: ' + eventName, mapModel, originalEventArgs);

                        var e = originalEventArgs[0];

                        if (!$scope.map.clickedMarker) {
                            $scope.map.clickedMarker = {
                                title: 'You clicked here',
                                latitude: e.latLng.lat(),
                                longitude: e.latLng.lng(),
                                showWindow: true
                            };
                        }
                        else {
                            var marker = {
                                latitude: e.latLng.lat(),
                                longitude: e.latLng.lng(),
                                showWindow: true
                            };
                            $scope.map.clickedMarker = marker;
                        }
                        //scope apply required because this event handler is outside of the angular domain
                        $scope.$apply();
                    }
                }
            };

            $scope.map.markers.forEach(function (marker) {
                marker.closeClick = function () {
                    marker.showWindow = false;
                    $scope.$apply();
                };
                marker.onClicked = function () {
                    onMarkerClicked(marker);
                };
            });

            var onMarkerClicked = function (marker) {
                marker.showWindow = true;
                $scope.$apply();
            };

        }
    ]);