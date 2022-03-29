import { Button, View } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default function Form({ addArticle }) {
    return (
        <View style={gStyle.main}>
            <Formik initialValues={{ name: '', full: '', img: '' }} onSubmit={(values, action) => { addArticle(values); action.resetForm(); }}>
                {(props) => (
                    <View>
                        <TextInput value={props.values.name}
                            placeholder="Введите название"
                            style={styles.input}
                            onChangeText={props.handleChange('name')} />
                        <TextInput value={props.values.full}
                            placeholder="Введите полную информацию"
                            style={styles.input}
                            multiline
                            onChangeText={props.handleChange('full')} />
                        <TextInput value={props.values.img}
                            placeholder="Укажите фото"
                            style={styles.input}
                            onChangeText={props.handleChange('img')} />
                        <Button title="Добавить" onPress={() => props.handleSubmit()} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth:1,
        marginBottom:15
    }
})