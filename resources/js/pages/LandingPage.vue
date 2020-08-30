<template>
  <div>
    <v-row style="height: 90vh;" align="center" justify="center">
      <v-col>
        <div class="text-h3 blue-grey--text text--lighten-5 text-center">Aplikasi Web Perpustakaan</div>
        <br>
        <div class="text-h6 blue-grey--text text--lighten-5 text-center">{{ nama_sekolah }}</div>
      </v-col>  
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }, // End of Data()

  computed: {
      nama_sekolah: function () {
        return process.env.MIX_NAMA_SEKOLAH;
      },
      alamat_sekolah: function () {
        return process.env.MIX_ALAMAT_SEKOLAH;
      },
      logo_sekolah: function () {
        return process.env.MIX_LOGO_URL;
      }
    }, // End of Computed
}
</script>