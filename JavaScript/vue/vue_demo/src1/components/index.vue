<template>
  <table width="100%" class="cartTable" cellspacing="0" cellpadding="10px">
      <!-- 首行 -->
      <tr class="title">
        <td width="50"><input type="checkbox" name="" class="choose_all"></td>
        <td width="100" class=""><span style="margin-left: -10px;">全选</span></td>
        <td width="400">商品信息</td>
        <td width="150">单价（元）</td>
        <td width="150">数量</td>
        <td width="150">金额（元）</td>
        <td width="80">操作</td>
      </tr>

      <!-- 商品 -->
      <tr class="row" >
        <td><input type="checkbox" name="" class="choose"></td>
        <td class="tal"><a href="#" class="pic"><img src="http://cba.itlike.com/public/uploads/10001/20230321/39b505c2205b69a8ad91601290c5ac65.jpg" alt=""></a>
        </td>
        <td class="tal"><a href="#">艾美特(Airmate) 电风扇 五叶大风量4档遥控控制家用电扇空调伴侣 FS4056R-5</a></td>
        <td>
          <del class="tdl">158.00</del>
          <br>
          <b class="unit">129.00</b>
        </td>
        <td>
          <!-- 数字框 -->
          <div class="amount">
            <a href="#" class="Increase">+</a>
            <input type="text" value="1" class="unum">
            <a href="#" class="Reduce">-</a>
          </div>
        </td>
        <td><b class="u-price">129.00</b></td>
        <td><a href="#" class="btn-del">删除</a></td>
      </tr>

      <tr class="row" >
        <td><input type="checkbox" name="" class="choose"></td>
        <td class="tal"><a href="#" class="pic"><img src="http://cba.itlike.com/public/uploads/10001/20230321/39b505c2205b69a8ad91601290c5ac65.jpg" alt=""></a>
        </td>
        <td class="tal"><a href="#">艾美特(Airmate) 电风扇 五叶大风量4档遥控控制家用电扇空调伴侣 FS4056R-5</a></td>
        <td>
          <del class="tdl">158.00</del>
          <br>
          <b class="unit">129.00</b>
        </td>
        <td>
          <div class="amount">
            <a href="#" class="Increase">+</a>
            <input type="text" value="1" class="unum">
            <a href="#" class="Reduce">-</a>
          </div>
        </td>
        <td><b class="u-price">129.00</b></td>
        <td><a href="#" class="btn-del">删除</a></td>
      </tr>

      <tr class="row" >
        <td><input type="checkbox" name="" class="choose"></td>
        <td class="tal"><a href="#" class="pic"><img src="http://cba.itlike.com/public/uploads/10001/20230321/39b505c2205b69a8ad91601290c5ac65.jpg" alt=""></a>
        </td>
        <td class="tal"><a href="#">艾美特(Airmate) 电风扇 五叶大风量4档遥控控制家用电扇空调伴侣 FS4056R-5</a></td>
        <td>
          <del class="tdl">158.00</del>
          <br>
          <b class="unit">129.00</b>
        </td>
        <td>
          <div class="amount">
            <a href="#" class="Increase">+</a>
            <input type="text" value="1" class="unum">
            <a href="#" class="Reduce">-</a>
          </div>
        </td>
        <td><b class="u-price">129.00</b></td>
        <td><a href="#" class="btn-del">删除</a></td>
      </tr>

      <tr class="count">
        <td colspan="7">
          <div class="jiesuan clearfix">
            <div class="left fl">
              <p><input type="checkbox" name="" class="choose_all"> 全选&nbsp;&nbsp;&nbsp;<a href="#" class="del_check">删除选中商品</a></p>
            </div>
            <div class="right fr clearfix">
              <p>商品总计：￥465.00</p>
              <p>活动优惠：-￥0.00</p>
              <p>已选商品<span class="red t-number"> 0 </span>件 总价(不含运费、税费)：<span class="red t-price">￥0.00</span></p>
              <!-- <div><a href="#" class="btn pay">结算</a></div> -->
              <a href="#" class="btn pay fr">结算</a>
            </div>
          </div>
        </td>
      </tr>
    </table>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>