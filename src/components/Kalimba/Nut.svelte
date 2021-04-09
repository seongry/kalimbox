<script lang="ts">
    import type { KalimbaKeyBarsTypes } from "../../constants/KalimbaKey";




    export let key: KalimbaKeyBarsTypes;
</script>

<div class="Nut">
    <span class="keyCode{key.higher}">{key.code}{key.number}</span>
</div>

<style lang="scss">
    @import "../../theme/colors.scss";

    $keyWidth: 36px;
    $keyHeight:240px;

    .Nut {
        width: $keyWidth;
        height: $keyHeight;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        background-color: $black;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;

        color: $white;
        font-weight: bold;

        
        padding-bottom: 16px;
        position: relative;

        cursor: pointer;
        
        &:hover {
            background-color: $yellow;
            color: $black;
        }

        &:not(:first-child){
            margin-left: 12px;
        }

    }

    @mixin octave {
        position: absolute;
        bottom: 36px;
        width: $keyWidth;
        left: 0;
        text-align: center;
    }

    .keyCode {
        &2 {
            &:before {
                @include octave;
                content: ':';
            }
        }

        &1 {
            &:before {
                @include octave;
                content: '.';
            }
        }
    }
</style>