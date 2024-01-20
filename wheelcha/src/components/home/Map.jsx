import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import UserLocationMaker from "../../icon/userLocation.png";
import ChargeLocationMaker from "../../icon/chargeLocation.png";
import RepairLocationMaker from "../../icon/repairLocation.png";
import FindOptionBTN from "./FindOptionBTN";
import axios from "axios";
import FindBtn from "./FindBtn";
const Wrapper=styled.div`

  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index:1;
  background-color: transparent;
  margin-top:10px;
`
const OptionBtn = styled.button`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  border: 0px;
  margin: 5px;
  @media screen and (min-width: 850px) {
    padding: 3px 20px;
    font-size: 18px;
  };
  @media screen and (max-width: 850px) {
    padding: 5px 15px;
    font-size: 20px;
  }
`

const Map = () => {
    const mapElement = useRef(null);
    const {naver} = window;
    const [placeList, setPlaceList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:8080/api/places/list', {
                    params: {
                        placeName: null,
                        placeCategoryList: null
                    }
                }).then((response) => {
                console.log(response.data.result);
                setPlaceList(response.data.result);
            } ).catch ((e) =>{
                console.log(e);
            })
        };
        if (placeList.length===0) {
            fetchData();
        }

    }, []);

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


        let UserMarkerOptions = {
            position: Userlocation,
            map: map,
            icon: {
                url: `${UserLocationMaker}`,
                size: new naver.maps.Size(50, 54),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 25),
            }
        }
        new naver.maps.Marker(UserMarkerOptions);

        //주소로 경도 바꾸는거
        // function searchAddressToCoordinate(address) {
        //     naver.maps.Service.geocode({
        //         query: address
        //     }, function (status, response) {
        //         if (status === naver.maps.Service.Status.ERROR) {
        //             return alert('Something Wrong!');
        //         }
        //
        //         if (response.v2.meta.totalCount === 0) {
        //             return alert('totalCount' + response.v2.meta.totalCount);
        //         }
        //
        //         let item = response.v2.addresses[0],
        //             pointX = item.x,
        //             pointY = item.y;
        //         console.log(pointX, pointY);
        //     });
        // }


        //마커랑 윈도우 정보 담는 것
        var markers = [], infoWindows = [];


        //searchAddressToCoordinate("서울시 양원역로92");
        //37.5657, 126.976
        console.log(placeList.length);
        for (let i = 0; i < placeList.length; i++) {
            var latLngList = placeList[i]['coordinate'].split(',')
            let MarkerOptions;
            const Location = new naver.maps.LatLng(latLngList[0], latLngList[1]);
            if (placeList[i]['placeCategory'] === 'REPAIR') {
                MarkerOptions = {
                    position: Location,
                    map: map,
                    icon: {
                        url: `${RepairLocationMaker}`,
                        size: new naver.maps.Size(50, 54),
                        origin: new naver.maps.Point(0, 0),
                        anchor: new naver.maps.Point(25, 25),
                    }
                }
            } else if (placeList[i]['placeCategory'] === 'CHARGE') {
                MarkerOptions = {
                    position: Location,
                    map: map,
                    icon: {
                        url: `${ChargeLocationMaker}`,
                        size: new naver.maps.Size(50, 54),
                        origin: new naver.maps.Point(0, 0),
                        anchor: new naver.maps.Point(25, 25),
                    }
                }
            }
            var chargeMarker = new naver.maps.Marker(MarkerOptions);
            //장소 정보 띄우는 창
            let repairFlag=true;
            let repairHTML;
            if (repairFlag==true){
                repairHTML='<div style="font-size:15px;padding-top:10px;color:#10a64e;font-weight:bold;">사용 가능</div>'
            }else{
                repairHTML='<div style="font-size:15px;padding-top:10px;color:#ff0000;font-weight:bold;">사용 불가능</div>'
            }
            //마커 클릭시 뜰 정보창 ( html 형식으로 작성 )
            let infoWindow = new naver.maps.InfoWindow({
                content: '<div style="height:190px; ">' +
                    '<a href="/detail/'+placeList[i]["placeIdx"]+'" style="display:flex; text-decoration: none; color: black" >' +
                    '<img style="width:120px;margin:10px;" src="../locationInfoImg.png">' +
                    '<div style="display:flex;flex-direction: column">' +
                    '<div id="placename" style="width:200px;text-align:left;padding-top:10px;font-weight:bold;font-size:20px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+placeList[i]["placeName"]+'</div>' +
                    '<div style="width:200px;text-align:left;padding-top:10px;padding-right:5px;font-size:15px;">'+placeList[i]["addressDetail"]+'</div>' +
                    repairHTML+
                    '</div>' +
                    '</a>' +
                    '<div style="display:flex;flex-direction:row;justify-content:center;">' +
                    '<a style="font:black;width:150px;text-align:center;font-size:20px;padding:5px;font-weight:bold;border:2px solid #4ECB71;border-radius: 10px;margin-left:10px;margin-right:10px; margin-bottom:5px; background:none;" href="/sendAddress/'+placeList[i]["placeIdx"]+'">문자보내기</a>' +
                    '<button style="width:150px;text-align:center;font-size:20px;padding:5px;font-weight:bold;border:2px solid #4ECB71;border-radius: 10px;margin-left:10px;margin-right:10px; margin-bottom:5px; background:none;" onClick="">주소 복사</button>' +
                    '</div>' +
                    '</div> '
            });
            markers.push(chargeMarker)
            infoWindows.push(infoWindow);
        }
        //마커 클릭시 정보창 띄우고지우는 함수들
        naver.maps.Event.addListener(map, 'idle', function () {
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
            return function (e) {
                var marker = markers[seq],
                    infoWindow = infoWindows[seq];

                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker);
                }
            }
        }

        for (var i = 0, ii = markers.length; i < ii; i++) {
            naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
        }
        //여기까지 infowindow 창 띄우는 함수들
        const handleChargeSetting = () => {
            console.log('충전소');
        }

    }, [placeList]);
    const handleChargeSetting = () => {
        console.log('충전소');
    }



    return (
        <>
            <div ref={mapElement} style={{bottom: '113px', top: '0px', height: '100%', width: '100%', zIndex: 0}}>
                <Wrapper>
                    <OptionBtn  style={{backgroundColor:'#4ECB71'}} onClick={handleChargeSetting}>충전소</OptionBtn>
                    <OptionBtn  style={{backgroundColor:'#4B89DC'}}>수리소</OptionBtn>
                    <OptionBtn style={{backgroundColor:'#E67373'}}>공기 주입기</OptionBtn>
                </Wrapper>
            </div>
        </>
    );
};


export default Map;