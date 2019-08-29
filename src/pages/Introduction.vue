<template>
	<div class="row">
		<div class="col-12">
			<h1>Welcome to the Deloitte Patterns Library.</h1>
			<p>The DPatterns library is your one stop place for all Vue.js components. This library allows you to build your application using robust, reusable components.</p>
			<b-card title="Featured Patterns" title-tag="h2" tag="div">
				<div class="row">
					<div class="col">
						<p>To view any of the patterns, click on the links below or use the left-hand navigation bar.</p>
						<ul>
							<li><router-link :to="{ name:'Form Controls'}">FormControls</router-link></li>
							<li><router-link :to="{ name:'Containers'}">Containers</router-link></li>
							<li><router-link :to="{ name:'Tables'}">Tables</router-link></li>
							<li><router-link :to="{ name:'Messaging'}">Messaging</router-link></li>
							<li><router-link :to="{ name:'Design Examples'}">Design Examples</router-link></li>
						</ul>
						<span class="fa fa-redo-alt"></span>
						<span class="fa fa-tags"></span>
						<span class="fa fa-file-edit"></span>
						<span class="fa fa-hand-paper"></span>
						<span class="fa fa-box-open"></span>
						<span class="fa fa-eye"></span>
						<span class="fa fa-trash-alt"></span>
						<span class="fa fa-info-circle"></span>
					</div>
				</div>
			</b-card>
			<p>If you have any questions or need additional assistance please <a href="mailto:coobrien@deloitte.com">reach out to our team</a>.</p>
		</div>
	</div>
</template>
