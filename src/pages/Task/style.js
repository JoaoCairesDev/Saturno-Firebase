import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    position: 'relative',
    height: 100,
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  buttonNewTask: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 700,
    left: 20,
    //laranjinha
    backgroundColor: '#f56725',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtons: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Tasks: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  deleteTask: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  DescriptionTask: {
    width: '75%',
    alignContent: 'flex-start',
    backgroundColor: '#0d0d0d',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: '#f56725',
    fontSize: 18,
  },
  DeleteX: {
    color: '#000',
    fontSize: 18,
    marginLeft: 20,
  },
});
export default styles;
