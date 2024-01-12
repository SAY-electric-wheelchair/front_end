import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import UserLocationMaker from "../../icon/userLocation.png";
import ChargeLocationMaker from "../../icon/chargeLocation.png";
import FindOptionBTN from "./FindOptionBTN";


const Map = () => {
    const mapElement = useRef(null);
    const {naver} = window;

    useEffect(() => {
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const Userlocation = new naver.maps.LatLng(37.5656, 126.9769);

        const mapOptions = {
            center: Userlocation,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.RIGHT_CENTER
            }
        };


        const map = new naver.maps.Map(mapElement.current, mapOptions);


        let UserMarkerOptions={
            position: Userlocation,
            map:map,
            icon: {
                url: `${UserLocationMaker}`,
                size: new naver.maps.Size(50, 54),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 25),
            }
        }
        new naver.maps.Marker(UserMarkerOptions);
        //마커랑 윈도우 정보 담는 것
        var markers = [],
            infoWindows = [];
        //여기부터 마커를 for문으로 돌려서 표시해야함 ( 백 연결시에 )

        const ChargeLocation = new naver.maps.LatLng(37.5657, 126.976);
        let ChargeMarkerOptions={
            position: ChargeLocation,
            map:map,
            icon: {
                url: `${ChargeLocationMaker}`,
                size: new naver.maps.Size(50, 54),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 25),
            }
        }
        var chargeMarker = new naver.maps.Marker(ChargeMarkerOptions);
        //장소 정보 띄우는 창

        //마커 클릭시 뜰 정보창 ( html 형식으로 작성 )
        let infoWindow = new naver.maps.InfoWindow({
            content: '<div>'+
                '<a href="https://github.com/lims00" style="display:flex; text-decoration: none; color: black" >'+
                '<img style="width:120px;margin:10px;" src="../locationInfoImg.png">' +
                '<div style="display:flex;flex-direction: column">'+
                '<div style="width:200px;text-align:left;padding-top:10px;font-weight:bold;font-size:20px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">여기에para가 들어올거에요</div>'+
                '<div style="width:200px;text-align:left;padding-top:10px;padding-right:5px;font-size:15px;">서울특별시 강남구 테헤란로 427</div>'+
                '<div style="font-size:15px;padding-top:10px;color:#10a64e;font-weight:bold;">사용 가능</div>'+
                '</div>' +
                '</a>' +
                '<div style="display:flex;flex-direction:row;justify-content:center;">'+
                '<button style="width:150px;text-align:center;font-size:20px;padding:5px;font-weight:bold;border:2px solid #4ECB71;border-radius: 10px;margin-left:10px;margin-right:10px; margin-bottom:5px; background:none;" onClick="">문자보내기</button>'+
                '<button style="width:150px;text-align:center;font-size:20px;padding:5px;font-weight:bold;border:2px solid #4ECB71;border-radius: 10px;margin-left:10px;margin-right:10px; margin-bottom:5px; background:none;" onClick="">주소 복사</button>'+
                '</div>' +
                '</div> '
        });
        markers.push(chargeMarker)
        infoWindows.push(infoWindow);

        //마커 클릭시 정보창 띄우고지우는 함수들
        naver.maps.Event.addListener(map, 'idle', function() {
            updateMarkers(map, markers);
        });
        function updateMarkers(map, markers) {

            var mapBounds = map.getBounds();
            var marker, position;

            for (var i = 0; i < markers.length; i++) {

                marker = markers[i]
                position = marker.getPosition();

                if (mapBounds.hasLatLng(position)) {
                    showMarker(map, marker);
                } else {
                    hideMarker(map, marker);
                }
            }
        }
        function showMarker(map, marker) {

            if (marker.setMap()) return;
            marker.setMap(map);
        }

        function hideMarker(map, marker) {

            if (!marker.setMap()) return;
            marker.setMap(null);
        }
        function getClickHandler(seq) {
            return function(e) {
                var marker = markers[seq],
                    infoWindow = infoWindows[seq];

                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker);
                }
            }
        }

        for (var i=0, ii=markers.length; i<ii; i++) {
            naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
        }
        //여기까지 infowindow 창 띄우는 함수들


    }, []);

    return (
        <>
            <div ref={mapElement} style={{bottom:'113px',top:'0px', height: '100%',width:'100%',zIndex:0}}>
            <FindOptionBTN/>
            </div>
        </>
    );
};


export default Map;