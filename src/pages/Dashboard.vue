<template>
	<div class="row">
		<div class="col-12">
			<h1>Welcome to the Deloitte Patterns Library.</h1>
			<p>The DPatterns library is your one stop place for all Vue.js components. This library allows you to build your application using robust, reusable components.</p>
			<p>If you have any questions or need additional assistance please <a href="mailto:coobrien@deloitte.com">reach out to our team</a>.</p>
			<b-card title="Featured Patterns" title-tag="h2" tag="div">
				<div class="row">
					<div class="col">
						<p>To start an application, we would like to collect a bit of information. Based on your email, we will look up information about you and automatically fill out as much of the application as we can.</p>
						<ul>
							<li><router-link :to="{ name:'Form Controls'}">FormControls</router-link></li>
						</ul>
					</div>
				</div>
			</b-card>
		</div>
	</div>
</template>
