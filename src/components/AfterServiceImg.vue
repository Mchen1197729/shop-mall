<template>
    <div class="afterserviceimg">

        <div class="uploadimg-list"  v-if="imgs.length" v-for="(item, index) in imgs" :key="index">
            <!--<div >-->
                <yd-badge @click.native="remove(index)">X</yd-badge>
                <img class="thumbnail-list" :src="item.url">
            <!--</div>-->
        </div>
        <div class="uploadimg" v-show="upload">
            <input name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="uploadImg" ref="file"/>
            <img slot="icon" src="../../static/image/addimg.png">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgs: [],
            upload: true,
            imgData: {
                accept: 'image/gif, image/jpeg, image/png, image/jpg'
            }
        }
    },
    computed: {
        uploadImageMax () {
            return this.$store.state.config.upload_image_max
        }
    },
    methods: {
        uploadImg (e) {
            let file = e.target.files[0]
            let data = new FormData() // 创建form对象
            data.append('upfile', file, file.name) // 通过append向form对象添加数据
            this.$api.uploadFile(data, res => {
                if (res.status) {
                    this.imgs.push(res.data)
                }
            })
            // 上传完成后清空input 的值
            this.$refs.file[0].value = ''
        },
        remove (index) {
            this.imgs.splice(index, 1)
        }
    },
    watch: {
        imgs () {
            this.$emit('images', this.imgs)
            if (this.imgs.length >= this.uploadImageMax) {
                this.upload = false
            } else {
                this.upload = true
            }
        }
    }
}
</script>
