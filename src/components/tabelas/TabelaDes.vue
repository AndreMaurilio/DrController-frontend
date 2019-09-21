<template>
  <div class="panel-body">
    <table
      width="100%"
      class="table table-striped table-bordered table-hover"
      id="dataTables-example"
    >
      <thead>
        <tr>
          <th>Projeto</th>
          <th>Isométrico</th>
          <th>Desenhistas</th>
          <th>Verificador</th>
          <th>Revisão</th>
          <th>Estatus</th>
          <th>Data Inicial</th>
          <th>Data Emissão</th>
          <th>N°Folhas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="des in valor" :key="des.id">
          <td>{{des.desContratado}}</td>
          <td>{{des.tag}}</td>
          <td>{{des.desIdCad}}</td>
          <td>{{des.nomeVerificador}}</td>
          <td>{{des.revisao}}</td>
          <td>{{des.status}}</td>

          <td>{{formatoDeDatas(des.dataini)}}</td>
          <td>{{des.datafin}}</td>
          <td>{{des.numFolhas}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'TabelaDesenhos',
    props:{
        valor: Array
    },
    methods:{
      formatoDeDatas: function (desData) {
        var dataDes = new Date(desData)
        var strData = ''
        return strData.concat(dataDes.getDate(),'/',dataDes.getMonth(),'/',dataDes.getFullYear())
    },
    }





}
</script>



<style>
</style>