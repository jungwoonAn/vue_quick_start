<script>
    export default {
        name: 'OptionsAPI',
        data() {
            return {
                name: '',  // name 관련 데이터
                x: 0,      // calc 관련 데이터
                y: 0,      // calc 관련 데이터
            }
        },
        computed: {
            result() {  // clac 관련 계산된 속성
                return parseInt(this.x, 10) + parseInt(this.y, 10)
            }
        },
        mounted() {
            this.name = 'john';  // name 데이터 초기화
            this.x = 10;         // calc 데이터 초기화
            this.y = 20;         // calc 데이터 초기화
        },
        methods: {
            changeX(strX) {  // clac 관련 메서드
                let x = parseInt(strX, 10);
                this.x = isNaN(x) ? 0 : x;
            },
            changeY(strY) {  // clac 관련 메서드
                let y = parseInt(strY, 10);
                this.y = isNaN(y) ? 0 : y;
            },
            changeName(name) {  // name 관련 메서드
                this.name = name.trim().length < 2 ? '' : name.trim();
            }
        }
    }
</script>