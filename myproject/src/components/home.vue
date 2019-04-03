<template>
<div class="container">
<div id="ipresenter">
	<div class="step" data-x="0" data-y="0" data-thumbnail="../assets/images/thumbs/895601241627423.jpg">
		<img src="../assets/images/photos/895601241627423.jpg" />
	</div>
	<div class="step" data-x="1500" data-y="0" data-rotatex="180" data-easing="easeInOutQuint" data-pausetime="15000" data-thumbnail="../assets/images/thumbs/895601241627428.jpg">
		<img src="../assets/images/photos/895601241627428.jpg" />
	</div>
	<div class="step" data-x="3000" data-y="0" data-rotatey="180" data-pausetime="2000" data-thumbnail="../assets/images/thumbs/895601241627432.jpg">
		<img src="../assets/images/photos/895601241627432.jpg" />
	</div>
	<div class="step" data-x="4500" data-y="0" data-rotatex="180" data-thumbnail="../assets/images/thumbs/895601241627445.jpg">
		<img src="../assets/images/photos/895601241627445.jpg" />
	</div>
	<div class="step" data-x="6000" data-y="0" data-rotate="180" data-thumbnail="../assets/images/thumbs/895601241627453.jpg">
		<img src="../assets/images/photos/895601241627453.jpg" />
	</div>
	<div class="step" data-x="7500" data-y="0" data-rotatey="180" data-thumbnail="../assets/images/thumbs/895601241627457.jpg">
		<img src="../assets/images/photos/895601241627457.jpg" />
	</div>
	<div class="step" data-x="9000" data-y="0" data-thumbnail="../assets/images/thumbs/895601241627459.jpg">
		<img src="../assets/images/photos/895601241627459.jpg" />
	</div>
	<div class="step" data-x="10500" data-y="0" data-rotate="80" data-thumbnail="../assets/images/thumbs/895601241627470.jpg">
		<img src="../assets/images/photos/895601241627470.jpg" />
	</div>
	<div class="step" data-x="12000" data-y="0" data-rotatex="180" data-thumbnail="../assets/images/thumbs/895601241627495.jpg">
		<img src="../assets/images/photos/895601241627495.jpg" />
	</div>
	<div class="step" data-x="13500" data-y="0" data-rotatey="180" data-scale="0.6" data-thumbnail="../assets/images/thumbs/895601241627526.jpg">
		<img src="../assets/images/photos/895601241627526.jpg" />
	</div>
	<div class="step" data-x="15000" data-y="0" data-rotatey="-180" data-thumbnail="../assets/images/thumbs/895601241627606.jpg">
		<img src="../assets/images/photos/895601241627606.jpg" />
	</div>
	<div class="step" data-x="16500" data-y="0" data-rotatey="180" data-thumbnail="../assets/images/thumbs/895601241627621.jpg">
		<img src="../assets/images/photos/895601241627621.jpg" />
	</div>
</div>
</div>

</template>


<script>
import {jquery} from '../assets/js/jquery-1.7.1.min.js';
import {ipresenter} from '../assets/js/ipresenter.packed.js';
export default {
    mounted() {
        this.initial()

    },
    methods: {
       initial: function() {
           $('#ipresenter').iPresenter({
             animSpeed: 2000,
			 timer: '360Bar',
			 timerDiameter: 60,
			 timerStroke: 5,
			 timerPadding: 5,
			 timerColor: '#000',
			 timerBg: '#FFF',
			 timerOpacity: 0.4,
			 directionNav: false,
			 controlNav: true
           });
       }
    }
}
</script>


<style>

@import "../assets/css/demo2.css";
@import "../assets/css/styles.css";
/*
@import "../assets/css/style_two.css";
@import "../assets/css/style_three.css";
@import "../assets/css/style_four.css";
*/
</style>