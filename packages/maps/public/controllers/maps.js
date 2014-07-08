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
    ]);