<script>
    import { reactive, computed, onMounted } from 'vue';

    const useCalc = (x=0, y=0) => {
        const calcData = reactive({x:0, y:0});
        const result = computed(() => parseInt(calcData.x, 10) + parseInt(calcData.y, 10));
        onMounted(() => {
            clacData.x = x;
            clacData.y = y;
        })
        const changeX = (strX) => {
            let x = parseInt(strX, 10);
            calcData.x = isNaN(x) ? 0 : x;
        }
        const changeY = (strY) => {
            let y = parseInt(strY, 10);
            calcData.y = isNaN(y) ? 0 : y;
        }

        return {clacData, result, changeX, changeY }
    }

    const useName = (name='john') => {
        const nameData = reactive({name: ''});
        const changeName = (name) => {
            console.log(name);
            nameData.name = name.trim().length < 2 ? '' : name.trim();
        }
        onMounted(() => nameData.name = 'john');

        return { nameData, changeName }
    }

    export default {
        name: 'CompositionAPI',
        setup() {
            const nameObj = useName('smith');
            const calcObj = useCalc(100,200);
            
            return { ...nameObj, ...calcObj }
        }
    }
</script>