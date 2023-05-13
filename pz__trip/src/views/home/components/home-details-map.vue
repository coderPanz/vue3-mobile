<template>
  <div class="map">
    <defailsFacility title="周边地图" infos="查看更多周边">
      <div class="baidu" ref="mapEl">

      </div>
    </defailsFacility>
  </div>
</template>

<script setup>
import defailsFacility from '@/components/details-facility/details-facility.vue'
import { ref, onMounted } from 'vue';

  const props = defineProps({
    position: {
      type: Object,
      defalut: () => ({})
    }
  })
  const mapEl = ref()
  // 确保.baidu这个组件已经被渲染成功
  onMounted(() => {
    // 首先创建地图实例，之后用一个Point坐标点和缩放级别来初始化地图
    var map = new BMapGL.Map(mapEl.value);// 创建地图实例 (把地图放到.baidu的div元素中)
    var point = new BMapGL.Point(props.position.longitude, props.position.latitude);  // 创建点坐标 (经纬度)
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    // 向地图中添加标注 
    var marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
  })
  
</script>

<style lang="less" scoped>
  .baidu {
    height: 300px;
  }
</style>
