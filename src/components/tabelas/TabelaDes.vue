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
          <th>Subtítulo</th>
          <th>Isométrico</th>
          <th>N°Desenho</th>
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
          <td>{{des.desSubtitulo}}</td>
          <td>{{des.tag}}</td>
          <td>{{des.pid}}</td>
          <td>{{des.desIdCad}}</td>
          <td>{{des.nomeVerificador}}</td>
          <td>{{des.revisao}}</td>
          <td>{{des.status}}</td>

          <td>{{formatoDeDatas(des.dataini)}}</td>
          <td>{{formatoDeDatas(des.datafin)}}</td>
          <td>{{des.numFolhas}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'TabelaDesenhos',
    props:{
        valor: Array
    },
    methods:{
      formatoDeDatas: function (desData) {
        return moment.utc(desData).format("DD/MM/YYYY")
        
    },
    }





}
</script>



<style>
</style>