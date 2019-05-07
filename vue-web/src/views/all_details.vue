<template>
<PageContainer pageHeaderStyle="page-body-details" splashStyle="details" title="All Examples" :srOnly="true">
	<template slot="pageBody">
		<div class="row ml-3 mr-3">
			<div class="col">
                <div class="detailed-content all-details">
                    <b-carousel
                        id="carousel"
                        v-model="slide"
                        :interval="interval"
                        controls
                        indicators
                        background="#1f1f1f"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                        >
                        <b-carousel-slide v-for="card in selectedCard" :key="card.id">
                            <img
                            slot="img"
                            class="d-block img-fluid w-100"
                            :src="card.images[0].imgSource"
                            alt="image slot"
                            >
                            <div class="info all">
                                <div class="card-logo" v-if="card.alliance_relationship_1 !== ''" :class="{ salesforce: card.alliance_relationship_1 === 'Salesforce' }"></div>
                                <p class="title" v-if="card.app_title !== ''">{{card.app_title}}</p>
                                <p class="description" v-if="card.short_description !== ''">{{card.short_description}}</p>
                                <p class="implemented" v-if="card.implemented !== ''">Implemented In: <span>{{card.implemented}}</span></p>
                                <p class="contact" v-if="card.asset.contacts !== ''">Contact: <span>{{card.asset_contacts}}</span></p>
                            </div>
                        </b-carousel-slide>
                        <!-- <div class="info" v-for="card in selectedCard" :key="card.id">
                            <div class="card-logo" v-if="card.alliance_relationship_1 !== ''" :class="{ salesforce: card.alliance_relationship_1 === 'Salesforce' }"></div>
                            <p class="title" v-if="card.app_title !== ''">{{card.app_title}}</p>
                            <p class="description" v-if="card.short_description !== ''">{{card.short_description}}</p>
                            <p class="implemented" v-if="card.implemented !== ''">Implemented In: <span>{{card.implemented}}</span></p>
                            <p class="contact" v-if="card.asset.contacts !== ''">Contact: <span>{{card.asset_contacts}}</span></p>
                        </div> -->
                    </b-carousel>
                </div>
			</div>
		</div>
	</template>
</PageContainer>
</template>

<script>
export default {
	data () {
		return {
			id: null,
			interval: 10000,
			slide: 0,
			sliding: null,
		};
	},
	methods: {
		onSlideStart (slide) {
			this.sliding = true;
		},
		onSlideEnd (slide) {
			this.sliding = false;
		},
	},
    computed: {
        selectedCard () {
            return this.$store.state.appDetails;
        },
    },
};
</script>
