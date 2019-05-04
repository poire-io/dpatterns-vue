<template>
<div class="card-flip" :class="[{ flipped: isFlipped }, { sub: isSubCard }]">
	<div class="flip">
		<div class="front">
			<div class="card">
				<div class="card-logo" :class="{ salesforce: cardBranding === 'salesforce' }"></div>
				<div class="card-header" :class="variant" @click="flipCard">
					<div class="row">
						<div class="col">
							<h2>{{title}}</h2>
						</div>
					</div>
				</div>
				<div class="card-body" @click="flipCard">
					<div class="row card-body-icon">
						<div class="col">
							<span class="card-icon"><em :class="iconModifier + ' fa-fw ' + icon"></em></span>
						</div>
					</div>
					<div class="row front-body">
						<div class="col">
							<slot name="body"></slot>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<b-button variant="outline-primary" @click="goToDetails(whereTo)">{{buttonText}}</b-button>
				</div>
			</div>
		</div>
		<div class="back">
			<div class="card">
				<div class="card-logo" :class="{ salesforce: cardBranding === 'salesforce' }"></div>
				<div class="card-header" :class="variant" v-html="title" @click="flipCard" />
				<div class="card-body" @click="flipCard">
					<div class="row back-body">
						<div class="col">
							<slot name="flipped-body"></slot>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<b-button variant="outline-primary" @click="goToDetails(whereTo)">{{buttonText}}</b-button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		icon: {
			type: String,
		},
		iconModifier: {
			type: String,
		},
		variant: {
			type: String,
		},
		buttonText: {
			type: String,
		},
		whereTo: {
			type: String,
		},
		isSubCard: {
			type: Boolean,
		},
		cardBranding: {
			type: String,
		},
	},
	data () {
		return {
			isFlipped: false,
		};
	},
	methods: {
		flipCard () {
			this.isFlipped = !this.isFlipped;
		},
	},
};
</script>

<style lang="scss">
$font-path: "../assets/fonts/";
@import '../assets/scss/fonts'; // core colors, paths
@import '../assets/scss/variables'; // core colors, paths
$img-path: "../assets/images/";

.btn {
	width: 100%;
	height: 50px;
}

.card {
	border-radius: 0;
	.card-header {
		background: none;
		border-bottom: none;
		border-top: 0.5rem solid;
		text-align: center;
		font-family: $base-font-bold;
		font-size: 1.2rem;
		padding-bottom: 0;
		min-height: 4.75rem;
		.row {
			height: 3.375rem;
			.col {
				margin: auto 0;
			}
		}
		&:first-child {
			border-radius: 0;
		}
		&.blue {
			border-color: $sky_blue;
		}
		&.green {
			border-top: 0.5rem solid $green;
		}
		&.pink {
			border-top: 0.5rem solid $pink;
		}
		&.lavender {
			border-top: 0.5rem solid $lavender;
		}
		&.orange {
			border-top: 0.5rem solid $orange;
		}
		&.red {
			border-top: 0.5rem solid $rusted_red;
		}
	}
	.card-body {
		text-align: center;
		padding-left: 2rem;
		padding-right: 2rem;
	}
	.card-footer {
		text-align: center;
		background: none;
		border-top: none;
	}
	.card-icon {
		margin: .625rem 0 1.25rem 0;
		display: block;
		em {
			font-size: 4rem;
			height: 5rem;
		}
	}
	.front-body {
		margin: 0 -1.875rem;
		height: 120px;
	}
	.back-body {
		height: 230px;
		overflow: hidden;
		overflow-y: auto;
	}
}

.card-logo {
	position: absolute;
	right: 0;
	top: 12px;
	display: block;
	width: 40px;
	height: 50px;
	&.salesforce {
		background: url(#{$img-path}logo_sf.svg) no-repeat;
	}
}

.card-flip {
	perspective: 1000px;
	&.flipped .flip {
		transform: rotateY(180deg);
	}
	&.sub {
		.flip {
			.front {
				height: auto;
			}
			.back {
				height: auto;
			}
			.card {
				.card-header {
					display: none;
				}
				.card-body {
					.card-body-icon {
						display: none;
					}
					.front-body {
						height: auto;
						margin-top: 1.5rem;
						min-height: 5rem;
						margin-bottom: -1rem;
						.col {
							margin: auto 0;
						}
					}
					.back-body {
						height: 5.625rem;
						font-size: 0.8rem;
					}
				}
			}
		}
	}
}

.card-flip,
.front,
.back {
	width: 100%;
	height: 450px;
	&.sub {
		// height: 220px;
		// height: 265px;
		height: 14.5625rem;

	}
}

.flip {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
}

.front,
.back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.front {
	z-index: 2;
	transform: rotateY(0deg);
}

.back {
	transform: rotateY(180deg);
}
</style>
