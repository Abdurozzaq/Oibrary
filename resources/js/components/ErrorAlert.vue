<template>
  <v-alert
		border="top"
		color="red lighten-2"
		dark
		dismissible
	>
		<ul v-for="(error, index) in serverError" v-bind:key="index">
				<li>{{ error[0] }}</li>
		</ul>
	</v-alert>
</template>

<script>
export default {
	props: ['serverError']
}
</script>

<style>

</style>
