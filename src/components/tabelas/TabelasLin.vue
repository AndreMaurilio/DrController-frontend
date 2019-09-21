<template>
  <div class="panel-body">
    <table
      width="100%"
      class="table table-striped table-bordered table-hover"
      id="dataTables-example"
    >
      <thead>
        <tr>
          <th>Tag</th>
          <th>Material</th>
          <th>Pendências</th>
          <th>Fluido</th>
          <th>Area</th>
          <th>Site</th>
          <th>Tag BIM</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="li in valor" :key="li.id">
          <td>{{li.liTag}}</td>
          <td>{{li.liMaterial}}</td>
          <td>{{li.liPendencias}}</td>
          <td>{{li.liFluido}}</td>
          <td>{{li.liArea}}</td>
          <td>{{li.liSite}}</td>
          <td>{{li.liBimTag}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'TabelaLinhas',
    props:{
        valor: Array
    },
    methods:{

    }





}
</script>



<style>
</style>