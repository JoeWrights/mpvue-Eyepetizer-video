<template>
  <div class="loading-container">
    <div class="eye">
      <div class="eye-outside">
        <div class="eye-inside"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  /* .loading-container {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 99;
    overflow: hidden;
    background: #fff;
  } */
  .eye {
    width: 130rpx;
    height: 90rpx;
    position: relative;
    margin: 40vh auto;
    background: #444;
    border-radius: 65rpx/45rpx;
  }

  .eye-outside {
    width: 56rpx;
    height: 56rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .eye-inside {
    width: 32rpx;
    height: 32rpx;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -16rpx;
    margin-left: -16rpx;
    background: #444;
    border-radius: 50%;
  }

  .eye-inside::after {
    width: 20rpx;
    height: 20rpx;
    content: "";
    position: absolute;
    top: 4rpx;
    left: 56%;
    background: #fff;
    border-radius: 50%
  }

  .eye-inside {
    animation: spin .4s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
